import { Button } from '@mui/material';
import React, { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

export default function CampaignForm({ addCampaign }) {
  const [newProduct, setNewProduct] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    addCampaign(newProduct);
    setNewProduct([]);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
    }
  };

  return (
      <div>
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
           name="campaign_name"
           value={newProduct.campaign_name}
           onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <Editor
            placeholder="Desc"
            name="campaign_desc"
            value={newProduct.campaign_desc}
            onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}/>
        <input
          type="text"
          placeholder="Product Desc"
          name="product_desc"
          value={newProduct.product_desc}
          onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          name="product_price"
          value={newProduct.product_price}
          onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
        />
        <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            name="file"
            onChange={handleFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        {fileName && (
            <div style={{ marginTop: 20 }}>
                <p>Selected File: {fileName}</p>
            </div>
        )}
        
        <button onClick={handleInputChange}>Add Campaign</button>
      </div>
  );
}

