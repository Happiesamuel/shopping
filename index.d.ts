type ProductCategory = {
  id: number;
  category: string;
  thumbnail: string;
};
type Product = ProductCategory[] & {
  category: string;
};
type SearchData = {
  id: number;
  img: string;
  title: string;
  rating: number;
  price: number;
  images?: string[];
};

interface ItemList {
  id: number;
  title: string;
  rating: number;
  price: number;
  description: string;
  images: string[];
}
