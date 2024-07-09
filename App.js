import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, category: 'Electronics' },
  { id: 2, name: 'Product 2', price: 200, category: 'Clothing' },
  { id: 3, name: 'Product 3', price: 150, category: 'Electronics' },
  // More products...
];

function App() {
  const [filter, setFilter] = useState({ category: '', priceRange: [0, 500] });

  const filteredProducts = initialProducts.filter((product) => {
    return (
      (filter.category ? product.category === filter.category : true) &&
      (product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1])
    );
  });

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <ProductFilter setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
