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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          {/* {data.title} */}
          {data.pageBuilder[0].heading}
        </h1>
        {/* <p style={{backgroundColor: data.secondaryColor.hex, padding: '1rem'}}>
          {data.description}
        </p> */}
        <div style={{padding: `1rem`}}>
          <h3>
            {data.pageBuilder[0].tagline}
          </h3>
          <button className={styles.button}>
            <Link href={data.pageBuilder[1].url}>
              {data.pageBuilder[1].linkText}
            </Link>
          </button>
        </div>
        <div>
          {data.pageBuilder[3].copy}
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
