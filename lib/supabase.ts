import { promises as fs } from 'fs';
import path from 'path';

// Tipos de datos
export type Category = {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  created_at: string;
};

export type Product = {
  id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  stock: number;
  is_featured: boolean;
  image_url: string;
  created_at: string;
  updated_at: string;
  categories?: Category;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  discount_percentage: number;
  is_active: boolean;
  start_date: string;
  end_date: string;
  created_at: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
};

// Rutas de archivos JSON
const DATA_DIR = path.join(process.cwd(), 'data');

// Funciones auxiliares para leer y escribir archivos
async function readJsonFile<T>(filename: string): Promise<T> {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [] as T;
  }
}

async function writeJsonFile<T>(filename: string, data: T): Promise<void> {
  try {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw error;
  }
}

// API simulada tipo Supabase
export const db = {
  // Métodos para Categories
  async getCategories(): Promise<Category[]> {
    return readJsonFile<Category[]>('categories.json');
  },

  // Métodos para Products
  async getProducts(): Promise<Product[]> {
    const products = await readJsonFile<Product[]>('products.json');
    const categories = await this.getCategories();
    const categoryMap = new Map(categories.map(c => [c.id, c]));
    
    return products.map(product => ({
      ...product,
      categories: categoryMap.get(product.category_id),
    }));
  },

  async getFeaturedProducts(limit?: number): Promise<Product[]> {
    const products = await this.getProducts();
    const featured = products.filter(p => p.is_featured);
    return limit ? featured.slice(0, limit) : featured;
  },

  // Métodos para Promotions
  async getPromotions(): Promise<Promotion[]> {
    const promotions = await readJsonFile<Promotion[]>('promotions.json');
    return promotions.filter(p => p.is_active);
  },

  // Métodos para Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return readJsonFile<ContactMessage[]>('contact_messages.json');
  },

  async addContactMessage(message: ContactMessage): Promise<void> {
    const messages = await this.getContactMessages();
    const newMessage = {
      ...message,
      created_at: new Date().toISOString(),
    };
    messages.push(newMessage);
    await writeJsonFile('contact_messages.json', messages);
  },
};
