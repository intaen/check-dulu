import React, { useState } from 'react';

export default function CampaignList( {campaigns} ) {
    console.log("CAMPAIGN", campaigns)
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ id: '', category: '', title: '', desc: '',  image: '', price: '' });


  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ id: '', category: '', title: '', desc: '',  image: '', price: '' });
  };

  return (
    <div>
      <h2>Campaign List</h2>
      <table>
        <thead>
          <tr>
            <th>Campaign ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.id}</td>
              <td>{campaign.title}</td> {/* category */}
              <td>{campaign.title}</td>
              <td>{campaign.title}</td> {/* desc */}
              <td>{campaign.title}</td> {/* image */}
              <td>Rp {campaign.title}</td> {/* price */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Campaign ID"
          name="id"
          value={newProduct.id}
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
           type="text"
           placeholder="Title"
           name="title"
           value={newProduct.title}
           onChange={handleInputChange}
        />
        <input
            type="text"
            placeholder="Desc"
            name="desc"
            value={newProduct.desc}
            onChange={handleInputChange}
        />
        <input
            type="text"
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
        <button onClick={handleAddProduct}>Add Campaign</button>
      </div>
    </div>
  );
}

