import { createClient } from '@sanity/client'
import { projectId, dataset, apiVersion } from '@/sanity/env'
import { urlFor } from '@/sanity/lib/image'

export { urlFor }

// Tipos de datos
export type Category = {
  id?: string
  name: string
  description: string
  icon_url: string
  _createdAt?: string
}

export type Product = {
  id?: string
  name: string
  description: string
  category: {
    _ref: string
    _type: 'reference'
  }
  price: number
  duration: string
  features?: string[]
  stock: number
  is_featured: boolean
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  _createdAt?: string
  _updatedAt?: string
  categories?: Category
}

export type Promotion = {
  id?: string
  title: string
  description: string
  image_url?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  discount_percentage: number
  is_active: boolean
  start_date: string
  end_date: string
  _createdAt?: string
}

export type ContactMessage = {
  id?: string
  name: string
  email: string
  phone?: string
  message: string
  _createdAt?: string
}

// Cliente de Sanity
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

// API simulada tipo Supabase pero usando Sanity
export const db = {
  // Métodos para Categories
  async getCategories(): Promise<Category[]> {
    const query = `*[_type == "category"] | order(_createdAt desc) {
      _id,
      name,
      description,
      icon_url,
      _createdAt
    }`
    return client.fetch(query)
  },

  // Métodos para Products
  async getProducts(): Promise<Product[]> {
    const query = `*[_type == "product"] | order(is_featured desc, _createdAt desc) {
      _id,
      name,
      description,
      category->,
      price,
      duration,
      features,
      stock,
      is_featured,
      image,
      _createdAt,
      _updatedAt
    }`
    return client.fetch(query)
  },

  async getFeaturedProducts(limit?: number): Promise<Product[]> {
    const limitClause = limit ? `[0...${limit}]` : ''
    const query = `*[_type == "product" && is_featured == true] | order(_createdAt desc) {
      _id,
      name,
      description,
      category->,
      price,
      duration,
      features,
      stock,
      is_featured,
      image,
      _createdAt,
      _updatedAt
    }${limitClause}`
    return client.fetch(query)
  },

  // Métodos para Promotions
  async getPromotions(): Promise<Promotion[]> {
    const query = `*[_type == "promotion" && is_active == true] | order(_createdAt desc) {
      _id,
      title,
      description,
      image,
      discount_percentage,
      is_active,
      start_date,
      end_date,
      _createdAt
    }`
    return client.fetch(query)
  },

  // Métodos para Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    const query = `*[_type == "contactMessage"] | order(_createdAt desc) {
      _id,
      name,
      email,
      phone,
      message,
      _createdAt
    }`
    return client.fetch(query)
  },

  async addContactMessage(message: ContactMessage): Promise<void> {
    const doc = {
      _type: 'contactMessage',
      name: message.name,
      email: message.email,
      phone: message.phone,
      message: message.message,
    }
    await client.create(doc)
  },
}
