import Head from 'next/head'
//component
import Layout from '../components/layout/Layout'
//style
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Home Page</title>
      <meta name='description' content='Blog Home Page'/>
    </Head>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
    )
}
