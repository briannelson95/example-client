import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'ji0xsof5',
    dataset: 'production',
    useCdn: false,
    ignoreBrowserTokenWarning: true,
})

export default client;

export const sanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    
}