import S from '@sanity/desk-tool/structure-builder'
import { IoOptions, IoHome } from "react-icons/io5";

const hiddenDocTypes = (listItem) =>
  !['siteSettings', 'parentPage',].includes(
    listItem.getId()
  )

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(IoOptions)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        S.divider(),
      S.listItem()
          .title('Frontpage')
          .icon(IoHome)
          .child(
            S.document()
              .schemaType('page')
              .documentId('frontpage')
          ),
        ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])