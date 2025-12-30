/*
  # Mundo Streaming - Database Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text) - Name of the streaming platform (Netflix, HBO, etc.)
      - `description` (text) - Description of the category
      - `icon_url` (text) - URL for the platform icon/logo
      - `created_at` (timestamptz)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to categories)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Price in local currency
      - `duration` (text) - Duration (e.g., "1 mes", "3 meses")
      - `features` (jsonb) - Array of features
      - `stock` (integer) - Available stock
      - `is_featured` (boolean) - Featured product
      - `image_url` (text) - Product image
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `promotions`
      - `id` (uuid, primary key)
      - `title` (text) - Promotion title
      - `description` (text) - Promotion description
      - `image_url` (text) - Banner image URL
      - `discount_percentage` (integer) - Discount percentage
      - `is_active` (boolean) - Active status
      - `start_date` (timestamptz) - Promotion start date
      - `end_date` (timestamptz) - Promotion end date
      - `created_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone
      - `message` (text) - Message content
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for categories, products, and active promotions
    - Authenticated write access for contact messages
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  icon_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  price numeric NOT NULL DEFAULT 0,
  duration text DEFAULT '1 mes',
  features jsonb DEFAULT '[]'::jsonb,
  stock integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create promotions table
CREATE TABLE IF NOT EXISTS promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  discount_percentage integer DEFAULT 0,
  is_active boolean DEFAULT true,
  start_date timestamptz DEFAULT now(),
  end_date timestamptz DEFAULT now() + interval '30 days',
  created_at timestamptz DEFAULT now()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Categories policies - public read
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Products policies - public read
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Promotions policies - public read active promotions
CREATE POLICY "Anyone can view active promotions"
  ON promotions FOR SELECT
  TO anon, authenticated
  USING (is_active = true AND now() BETWEEN start_date AND end_date);

-- Contact messages policies - anyone can insert
CREATE POLICY "Anyone can send contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample data
INSERT INTO categories (name, description, icon_url) VALUES
  ('Netflix', 'Streaming de películas y series', 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg'),
  ('HBO Max', 'Lo mejor del entretenimiento premium', 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg'),
  ('Disney+', 'Todo el universo Disney, Pixar, Marvel y Star Wars', 'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg'),
  ('Prime Video', 'Amazon Prime Video con contenido exclusivo', 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg'),
  ('Flujo TV', 'Televisión en vivo y deportes', 'https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg')
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO products (category_id, name, description, price, duration, features, stock, is_featured) 
SELECT 
  c.id,
  c.name || ' Premium',
  'Cuenta ' || c.name || ' premium con acceso completo',
  15.99,
  '1 mes',
  '["Acceso completo", "HD y 4K", "Múltiples perfiles", "Sin anuncios"]'::jsonb,
  100,
  true
FROM categories c
WHERE c.name IN ('Netflix', 'HBO Max', 'Disney+')
ON CONFLICT DO NOTHING;

-- Insert sample promotions
INSERT INTO promotions (title, description, image_url, discount_percentage, is_active, start_date, end_date) VALUES
  ('¡Oferta de Año Nuevo!', 'Obtén 30% de descuento en todas las cuentas Netflix', 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg', 30, true, now(), now() + interval '30 days'),
  ('Combo HBO + Disney+', 'Compra HBO Max y Disney+ juntos y ahorra 25%', 'https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg', 25, true, now(), now() + interval '30 days')
ON CONFLICT DO NOTHING;
