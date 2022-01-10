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
export const siteSettings = `
*[_type == "siteSettings" && _id == "siteSettings"][0] {
    title,
    description,
    primaryColor,
    secondaryColor,
    keywords
}
`

export const frontPageQuery = `
*[_type == "page" && _id == "frontpage"][0] {
    _id,
    pageDescription,
    pageTitle,
    pageBuilder,
    mainImage
}
`

export const frontPageSettings = `
*[_id in ["frontpage", "siteSettings"]]{
    _id == "frontpage" => {
        _id,
        pageDescription,
        pageTitle,
        pageBuilder,
        mainImage
    },
    _id == "siteSettings" => {
        title,
        description,
        primaryColor,
        secondaryColor,
        keywords
    }
}
`