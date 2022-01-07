import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '1ruc8rxn',
    dataset: 'production',
    useCdn: false,
    ignoreBrowserTokenWarning: true,
})

export default client;