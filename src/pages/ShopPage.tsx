import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, Product } from '../data/products';

const ShopPage: React.FC = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState({
    priceRange: [0, 5000],
    sizes: [] as string[],
    colors: [] as string[],
    inStock: false
  });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const allColors = ['Black', 'White', 'Gray', 'Navy', 'Blue'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= filterBy.priceRange[0] && product.price <= filterBy.priceRange[1]
    );

    // Filter by sizes
    if (filterBy.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => filterBy.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filterBy.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => filterBy.colors.includes(color))
      );
    }

    // Filter by stock
    if (filterBy.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      default:
        // Featured first, then best sellers
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.bestSeller && !b.bestSeller) return -1;
          if (!a.bestSeller && b.bestSeller) return 1;
          return 0;
        });
    }

    return filtered;
  }, [category, sortBy, filterBy]);

  const handleSizeFilter = (size: string) => {
    setFilterBy(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleColorFilter = (color: string) => {
    setFilterBy(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };

  const clearFilters = () => {
    setFilterBy({
      priceRange: [0, 5000],
      sizes: [],
      colors: [],
      inStock: false
    });
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 't-shirts':
        return 'T-Shirts';
      case 'shirts':
        return 'Shirts';
      case 'hoodies':
        return 'Hoodies';
      default:
        return 'All Products';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} products found
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              <List size={16} />
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filterBy.priceRange[0]}
                  onChange={(e) => setFilterBy(prev => ({
                    ...prev,
                    priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filterBy.priceRange[1]}
                  onChange={(e) => setFilterBy(prev => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value) || 5000]
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Sizes</h3>
              <div className="grid grid-cols-3 gap-2">
                {allSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => handleSizeFilter(size)}
                    className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                      filterBy.sizes.includes(size)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Colors</h3>
              <div className="space-y-2">
                {allColors.map(color => (
                  <label key={color} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterBy.colors.includes(color)}
                      onChange={() => handleColorFilter(color)}
                      className="mr-2 h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="text-sm">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* In Stock */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filterBy.inStock}
                  onChange={(e) => setFilterBy(prev => ({
                    ...prev,
                    inStock: e.target.checked
                  }))}
                  className="mr-2 h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm">In Stock Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;