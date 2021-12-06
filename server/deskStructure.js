import S from '@sanity/desk-tool/structure-builder'
import pages from './schemas/pages'
import team from './schemas/team'
import pageBuilder from './schemas/pageBuilder'


export default () => {
    S.list()
        .title('Content')
        .items([
            S.documentListItem()
                .schemaType('siteSettings')
                .title('Site Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            S.divider(),
            pages,
            team,
            pageBuilder,
            ...S.documentTypeListItems().filter(item => !['siteSettings'].includes(item.getId()))
        ])
}