import Layout from '../components/Layout'
import client from '../lib/config'
import { siteSettings } from '../lib/queries'
import '../styles/globals.css'

function MyApp({ Component, pageProps, data }) {
  // console.log(data)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

// export const getServerSideProps = async function (context) {

//   const data = await client.fetch(siteSettings)
//   // const siteData = await client.fetch(siteSettings)

//   return {
//     props: { data },
//   }
// }