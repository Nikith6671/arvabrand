export interface Product {
  id: string;
  name: string;
  category: 't-shirts' | 'shirts' | 'hoodies';
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential Black Tee',
    category: 't-shirts',
    price: 899,
    originalPrice: 1299,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg'
    ],
    description: 'A premium quality black t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit and durable construction.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviewCount: 124,
    inStock: true
  },
  {
    id: '2',
    name: 'Urban Streetwear Hoodie',
    category: 'hoodies',
    price: 2499,
    originalPrice: 3499,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Premium oversized hoodie with modern streetwear aesthetic. Features a kangaroo pocket and adjustable drawstrings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'White'],
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    reviewCount: 89,
    inStock: true
  },
  {
    id: '3',
    name: 'Classic White Shirt',
    category: 'shirts',
    price: 1899,
    images: [
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Timeless white shirt crafted from premium cotton blend. Perfect for both casual and formal occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Black'],
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviewCount: 67,
    inStock: true
  },
  {
    id: '4',
    name: 'Graphic Print Tee',
    category: 't-shirts',
    price: 1199,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg'
    ],
    description: 'Bold graphic print t-shirt with unique ARVA design. Made from soft cotton blend for maximum comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.6,
    reviewCount: 45,
    inStock: true
  },
  {
    id: '5',
    name: 'Minimalist Zip Hoodie',
    category: 'hoodies',
    price: 2799,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Clean, minimalist zip-up hoodie with subtle branding. Perfect for layering and everyday comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'Navy'],
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviewCount: 72,
    inStock: true
  },
  {
    id: '6',
    name: 'Premium Polo Shirt',
    category: 'shirts',
    price: 1599,
    images: [
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Classic polo shirt with modern fit. Made from breathable pique cotton for all-day comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Gray', 'Black'],
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.5,
    reviewCount: 98,
    inStock: true
  },
  {
    id: '7',
    name: 'Oversized Vintage Tee',
    category: 't-shirts',
    price: 1399,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg'
    ],
    description: 'Vintage-inspired oversized t-shirt with distressed finish. Perfect for a relaxed, casual look.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Vintage Black', 'Vintage White', 'Vintage Gray'],
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.4,
    reviewCount: 34,
    inStock: true
  },
  {
    id: '8',
    name: 'Fleece Pullover Hoodie',
    category: 'hoodies',
    price: 2199,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    description: 'Cozy fleece-lined pullover hoodie. Perfect for cooler weather with premium warmth and comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal', 'Navy', 'Forest Green'],
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};