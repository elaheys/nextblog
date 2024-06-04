import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const DetailPage = ({data}) => {
    
    return (
        <>
        <Head>
            <title>Detail Page</title>
            <meta name='description' content={data.title}/>
        </Head>

        <div className='detail-container'>
            <h3>ID: {data.id}</h3>
            <h2>Title: {data.title}</h2>
            <p>Body: {data.body}</p>

        <div className='detail-button'>
            <Link href='/'>Back to Home Page</Link>
        </div>

        </div>
        </>
    );
};

export default DetailPage;

export async function getServerSideProps(context){
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    if(!data.title){
        return{
            notFound:true,
        }
    }

    return{
        props:{
            data,
        },
    }
}