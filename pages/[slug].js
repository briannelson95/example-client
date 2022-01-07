export default function Page({  }) {
    return(
        <main>
            
        </main>
    )
}

export const getServerSideProps = async function (context) {

    const data = await client.fetch(frontPageQuery)
    // const siteData = await client.fetch(siteSettings)
  
    return {
      props: { data },
    }
  }