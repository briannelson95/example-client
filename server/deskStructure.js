import S from '@sanity/desk-tool/structure-builder'
import pages from './schemas/pages'
import team from './schemas/team'
import pageBuilder from './schemas/pageBuilder'


export default () =>{
  S.list()
    .title('Base')
    .items(
      S.documentTypeListItems()
    )
}