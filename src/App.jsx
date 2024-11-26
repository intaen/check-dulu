import React, { useState } from 'react'
import './App.css'
import { CampaignList } from './components/CampaignList';
import { ReportLeads } from './components/ReportLeads';
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
            className={`tab ${activeTab === 'report' ? 'active' : ''}`}
            onClick={() => setActiveTab('report')}
          >
            Report
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'products' && <CampaignList />}
          {activeTab === 'report' && <ReportLeads />}
        </div>
      </div>
    );
  }

export default App
