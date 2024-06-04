import { useState } from "react";
//components
import Card from "../components/module/Card";
import Pagination from "../components/module/Pagination";


export default function Home({data}) {
  
  const [allPosts,setAllPosts] = useState([])
  //10 posts to display in home page
  const somePosts = data.slice(0,10)

  return (
    <>
    <div className="main">
    <h1>Home Page</h1>

      {!allPosts.length &&
        somePosts.map(data => <Card key={data.id} data={data}/>)
      }
      <Pagination setAllPosts={setAllPosts}/>
    </div>
    </>
  )
}

export async function getServerSideProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return{
    props:{
      data,
    }
  }
}


