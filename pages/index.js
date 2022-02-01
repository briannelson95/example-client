import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import client from '../lib/config'
import { frontPageQuery, siteSettings, frontPageSettings } from '../lib/queries'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function Home({ data }) {
  console.log(data.pageBuilder)
  return (
    <div>
      <Head></Head>

      <main>
        <div className={styles.hero}>
          <div className={styles.textbox}>
            <h2 className={styles.title}>
              {data.pageBuilder[0].tagline} 
            </h2>
            <button className='blue-button'>{data.pageBuilder[1].linkText}</button>
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
