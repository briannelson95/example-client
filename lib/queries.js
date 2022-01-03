const postFields = `
  _id,
  name,
  title,
  date,
  mainImage,
  "slug": slug.current,
`

export const postQuery = `
{
    "post": *[_type == "post" && slug.current == $slug] | order(_updateAt desc) [0] {
        content,
        ${postFields}
    },
    "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
        content,
        ${postFields}
    }
}`

export const postSlugQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
}
`