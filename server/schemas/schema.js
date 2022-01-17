// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pages from './pages'
import blockContent from './blockContent'
import team from './team'
import callToAction from './callToAction'
import hero from './hero'
import textWithIllustration from './textWithIllustration'
import imageGallery from './imageGallery'
import form from './form'
import video from './video'
import pageBuilder from './pageBuilder'
import paragraphText from './paragraphText'
import siteSettings from './siteSettings'
import posts from './posts'
import projects from './projects'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'client name',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blockContent,
    hero,
    callToAction,
    paragraphText,
    textWithIllustration,
    imageGallery,
    form,
    video,

    pages,
    team,
    pageBuilder,
    siteSettings,
    projects,
    posts,
  ]),
})
