import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './categoryType'
import { productType } from './productType'
import { promotionType } from './promotionType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType, promotionType],
}
