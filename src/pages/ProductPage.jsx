import React, { useEffect, useState } from 'react';
import CampaignList from '../components/CampaignList';
import ReportLeads from '../components/ReportLeads';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaignList, addCampaignThunk } from '../redux/slices/campaignSlice';
import '../styles/Dashboard.css';
import CampaignForm from '../components/CampaignForm';

export default function ProductPage() {
    const dispatch = useDispatch();
    const {items: campaigns} = useSelector(state => state.campaigns);

    const [activeTab, setActiveTab] = useState('campaign');

    useEffect(() => {
      dispatch(fetchCampaignList());
    }, []);

    const handleAddCampaign = async (data) => {
      dispatch(addCampaignThunk(data));
  }

    return (
        <div className="dashboard">
                <h1>Check Dulu</h1>
                <div className="tabs">
                  <button
                    className={`tab ${activeTab === 'campaign' ? 'active' : ''}`}
                    onClick={() => setActiveTab('campaign')}
                  >
                    Campaign
                  </button>
                  <button
                    className={`tab ${activeTab === 'report' ? 'active' : ''}`}
                    onClick={() => setActiveTab('report')}
                  >
                    Report
                  </button>
                </div>
                <div className="tab-content">
                  {activeTab === 'campaign' && <CampaignList campaigns={campaigns}/>}
                  <CampaignForm addCampaign={handleAddCampaign} />
                  {activeTab === 'report' && <ReportLeads />}
                </div>
        </div>
    );
}