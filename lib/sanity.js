import {
    groq,
    createClient,
    createImageUrlBuilder,
    createPreviewSubscriptionHook,
} from 'next-sanity'

const config = {
    projectId: "1ruc8rxn",
    dataset: "production",
}

export const imageBuilder = source => createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)
export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'skS6vQWUnwuM36fMAIPYPfgK669RXRk1egpAK51o4M0tY6T0Ax7OksBjZkC70cp3Rs7tMUR1kBo4tRd6emILcQlkfajmwszXJveb8iHGbRwMUuN0aTJCdDmEoOEV0uPiTI6pisZNGlJ71eLxP4SKV4Z0N7cLJmKzKVCbPA7B2gOxytQs5mmM'
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client

