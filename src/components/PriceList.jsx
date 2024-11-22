import React, { useState } from 'react';

export function PriceList() {
  const [prices, setPrices] = useState([
    { id: 1, product: 'Product A', basePrice: 199.99, discountedPrice: 179.99 },
    { id: 2, product: 'Product B', basePrice: 49.99, discountedPrice: 44.99 },
    { id: 3, product: 'Product C', basePrice: 79.99, discountedPrice: 69.99 },
  ]);

  const [newPrice, setNewPrice] = useState({ product: '', basePrice: '', discountedPrice: '' });

  const handleInputChange = (e) => {
    setNewPrice({ ...newPrice, [e.target.name]: e.target.value });
  };

  const handleAddPrice = () => {
    setPrices([...prices, { id: prices.length + 1, ...newPrice }]);
    setNewPrice({ product: '', basePrice: '', discountedPrice: '' });
  };

  return (
    <div>
      <h2>Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Base Price</th>
            <th>Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price) => (
            <tr key={price.id}>
              <td>{price.product}</td>
              <td>${price.basePrice}</td>
              <td>${price.discountedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Product"
          name="product"
          value={newPrice.product}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Base Price"
          name="basePrice"
          value={newPrice.basePrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Discounted Price"
          name="discountedPrice"
          value={newPrice.discountedPrice}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPrice}>Add Price</button>
      </div>
    </div>
  );
}

