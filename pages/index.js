import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../lib/config'
import { frontPageQuery, siteSettings, frontPageSettings } from '../lib/queries'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function Home({ data }) {
  // console.log(data)
  return (
    <div className={styles.container}>
      <Head></Head>

      <main>
        <div className={styles.hero}>
          <h2 className="text-4xl font-bold">Take your minifigs to the next level</h2>
        </div>
        <div className='space-y-4'>
          <div className='w-96 bg-slate-500 text-sky-50 shadow rounded'>
            w-96
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async function (context) {

  const data = await client.fetch(frontPageQuery)

  return {
    props: { data },
  }
}
