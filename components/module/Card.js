import Link from 'next/link';
import React from 'react';
//function
import { shortenSentence } from '../helper/functions';

const Card = ({data}) => {
    
    return (
        <>
        
        <div className='container'>
            <div><h2>Post - {data.id}</h2></div>
            <div className='info'>
                <h4>{data.title}</h4>
                <h6>{shortenSentence(data.body)}</h6>
            </div>
            <div><Link href={`/postpage/${data.id}`}>Read more...</Link></div>
        </div>
        </>
    );
};

export default Card;