import React, { useState } from 'react';

export function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Electronics', price: 199.99 },
    { id: 2, name: 'Product B', category: 'Clothing', price: 49.99 },
    { id: 3, name: 'Product C', category: 'Home & Garden', price: 79.99 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '' });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: '', category: '', price: '' });
  };

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

