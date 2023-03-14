import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch(
    "https://hasinduperera12.github.io/amazonAPi/amazon.json"
  ).then((res) => res.json());

  return {
    props: {
      products: products,
      session: session,
    },
  };
}
