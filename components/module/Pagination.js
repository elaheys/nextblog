import React, { useEffect, useState } from 'react';
//component
import Card from './Card';
//loader
import { RotatingLines } from 'react-loader-spinner';

const Pagination = ({setAllPosts}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [slicedPosts, setSlicedPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const postsPerPage = 10; 
 

  useEffect(() => {
    setIsLoading(true)

    const fetchData =async () => {

      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()

      const startIndex = (currentPage - 1) * postsPerPage
      const endIndex = startIndex + postsPerPage
      
      setAllPosts(data)
      setSlicedPosts(data.slice(startIndex, endIndex))

      setIsLoading(false)
    }
    fetchData()
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1)
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

    return (
        <div className="main">
        <div >
          {isLoading ? <div className='loader-container '><RotatingLines
                        width='150px' 
                        height='150px' 
                        strokeWidth='4'
                        /> </div> : (
                        slicedPosts.map((post) => (
                        <Card key={post.id} data={post}/>
                        ))
                        )
        }
        </div>
        <div className='buttons'>
          <button onClick={handlePrevious} className='prev-button'
          disabled={currentPage === 1}>Previous</button>

          <button onClick={handleNext} className='next-button'
          disabled={currentPage === 10}>Next</button>
        </div>
      
      </div>
    );
};

export default Pagination;