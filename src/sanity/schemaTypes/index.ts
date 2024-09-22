import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from '../schema/blog'
import { petType } from '../schema/pet'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [petType, blogType],
}
