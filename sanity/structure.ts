import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('admin')
    .items([
      S.documentTypeListItem('product').title('Product'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('promotion').title('Promotion'),
    ])
