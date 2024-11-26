import React, { useState } from 'react';

export function CampaignList() {
  const [products, setProducts] = useState([]);

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
            <th>CampaignID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>{product.image}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <input
           type="Title"
           placeholder="Title"
           name="title"
           value={newProduct.title}
           onChange={handleInputChange}
        />
        <input
            type="Desc"
             placeholder="Desc"
             name="desc"
             value={newProduct.desc}
             onChange={handleInputChange}
        />
        <input
             type="Image"
             placeholder="Image"
             name="image"
             value={newProduct.image}
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

