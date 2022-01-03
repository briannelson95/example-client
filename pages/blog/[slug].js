import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { postQuery, postSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'

const Post = () => {
    const router = useRouter()

    const slug = data?.post?.slug
    const {
        data: { post, morePosts }
    } = usePreviewSubscription(postQuery, {
        params: { slug },
        initialData: data,
        enabled: preview && slug,
    })

    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404}/>
    }

    return ( 
        <>
            {router.isFallback ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <h3>{post.date}</h3>
                </>
            )}
        </>
    );
}
 
export default Post;

export async function getStaticProps({ params, preview = false }) {
    const { post, morePosts } = await getClient(preview).fetch(postQuery, {
        slug: params.slug,
      })
    
      return {
        props: {
          preview,
          data: {
            post,
            morePosts: overlayDrafts(morePosts),
          },
        },
      }
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(postSlugsQuery)
    return {
      paths: paths.map((slug) => ({ params: { slug } })),
      fallback: true,
    }
  }