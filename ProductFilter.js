import React from 'react';

const ProductFilter = ({ setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter((prevFilter) => ({ ...prevFilter, category: e.target.value }));
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    setFilter((prevFilter) => ({ ...prevFilter, priceRange: [min, max] }));
  };

  return (
    <div className="filter">
      <label>
        Category:
        <select onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </label>
      <label>
        Price Range:
        <select onChange={handlePriceChange}>
          <option value="0-500">All</option>
          <option value="0-100">Up to $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;
