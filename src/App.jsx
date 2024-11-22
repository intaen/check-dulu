import React, { useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList';
import { PriceList } from './components/PriceList';
import './styles/Dashboard.css';

function App() {
  const [activeTab, setActiveTab] = useState('products');

    return (
      <div className="dashboard">
        <h1>Check Dulu</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`tab ${activeTab === 'prices' ? 'active' : ''}`}
            onClick={() => setActiveTab('prices')}
          >
            Prices
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'products' && <ProductList />}
          {activeTab === 'prices' && <PriceList />}
        </div>
      </div>
    );
  }

export default App
