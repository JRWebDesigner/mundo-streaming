import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
};
