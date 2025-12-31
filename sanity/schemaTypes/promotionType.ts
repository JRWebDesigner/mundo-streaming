import { defineField, defineType } from 'sanity'

export const promotionType = defineType({
  name: 'promotion',
  title: 'Promoción',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Promoción',
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
      name: 'image',
      title: 'Imagen Promocional',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discount_percentage',
      title: 'Porcentaje de Descuento',
      type: 'number',
      description: 'Porcentaje de descuento 0-100 (OPCIONAL)',
    }),
    defineField({
      name: 'is_active',
      title: '¿Promoción Activa?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'start_date',
      title: 'Fecha de Inicio',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'end_date',
      title: 'Fecha de Finalización',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'discount_percentage',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: `${subtitle}% OFF`,
      }
    },
  },
})
