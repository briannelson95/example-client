import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../lib/config'
import { frontPageQuery, siteSettings, frontPageSettings } from '../lib/queries'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function Home({ data }) {
  console.log(data)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{data.pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
    </div>
  )
}

export const getServerSideProps = async function (context) {

  const data = await client.fetch(frontPageQuery)

  return {
    props: { data },
  }
}
