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
    <div>
      <Head>
        <title>{data.pageTitle}</title>
      </Head>

      <main>
        <div className={styles.hero}>
          <div className={styles.textbox}>
            <h2 className={styles.title}>
              {data.pageBuilder[0].tagline} 
            </h2>
            <Link 
              href={data.pageBuilder[0].cta.url}
              target="_blank"
            >
              <button className='blue-button'>{data.pageBuilder[0].cta.linkText}</button>
            </Link>
          </div>
        </div>
        <section className={styles.body}>
          <div className={styles.bodyText}>
            <h3>{data.pageBuilder[0].heading}</h3>
            <p>{data.pageBuilder[1].copy}</p>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>

            </div>
            <div className={styles.card}>

            </div>
          </div>
        </section>
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
