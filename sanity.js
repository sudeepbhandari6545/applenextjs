import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE || 'production',
  token: process.env.SANITY_API_TOKEN,
  projectId: process.env.SANITY_API_TOKEN,
  apiVerson: '2021-10-21',
  useCdn: process.env.SANITY_API_TOKEN === 'production',
}
export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
