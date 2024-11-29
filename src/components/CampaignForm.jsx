import React, { useState } from 'react';

export default function CampaignForm({ addCampaign }) {
  const [newProduct, setNewProduct] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    addCampaign(newProduct);
    setNewProduct([]);
  };

  return (
      <div>
        <input
          type="text"
          placeholder="Campaign ID"
          name="id"
          value={newProduct.id}
          onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
           type="text"
           placeholder="Title"
           name="title"
           value={newProduct.title}
           onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
            type="text"
            placeholder="Desc"
            name="desc"
            value={newProduct.desc}
            onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
            type="text"
            placeholder="Image"
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <button onClick={handleInputChange}>Add Campaign</button>
      </div>
  );
}

