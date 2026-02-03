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
  image: string;
  slug: string;
}
