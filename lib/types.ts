export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  quantity: string;
  image: string;
  slug: string;
  description?: string;
  notes?: string;
}
