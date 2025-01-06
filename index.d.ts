type ProductCategory = {
  id: number;
  category: string;
  thumbnail: string;
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

type Item = {
  _id: string;
  image: { url: string };
};

type Product = {
  media: {
    items: Item[];
  };
  name: string;
  description: string;
};
