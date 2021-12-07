import S from '@sanity/desk-tool/structure-builder'
import { IoOptions } from "react-icons/io5";

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
        ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])