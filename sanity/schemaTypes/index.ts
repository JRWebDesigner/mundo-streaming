import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { productType } from './productType'
import { promotionType } from './promotionType'
import { contactMessageType } from './contactMessageType'
import { postType } from './postType'
import { authorType } from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, productType, promotionType, contactMessageType, postType, authorType],
}
