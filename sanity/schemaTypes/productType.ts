import {defineType, defineField, defineArrayMember} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      options: {
        to: [{ type: 'category' }]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Ej: 1 mes, 3 meses, 1 año',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [defineArrayMember({ type: 'string'})], // ✅ Corregido
      description: 'Lista de características del producto',
    }),
    defineField({
      name: 'stock',
      title: 'Stock Disponible',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'is_featured',
      title: '¿Producto Destacado?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Imagen del Producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: `$${subtitle}`,
      }
    },
  },
})
