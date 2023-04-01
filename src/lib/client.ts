import sanityClient from '@sanity/client'
import  imageUrlBuilder  from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'l84eeffh',
    dataset: 'production',
    apiVersion: '1',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN
})
const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)