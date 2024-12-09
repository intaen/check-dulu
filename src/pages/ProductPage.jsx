import React, { useEffect, useState } from 'react';
import CampaignList from '../components/CampaignList';
import ReportLeads from '../components/ReportLeads';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaignThunk, addCampaignThunk } from '../redux/slices/campaignSlice';
import '../styles/Dashboard.css';
import CampaignForm from '../components/CampaignForm';
import { fetchReportThunk } from '../redux/slices/reportLeadsSlice';
import { Button } from '@mui/material';
import { Logout } from '../components/Logout';

export default function ProductPage() {
    const dispatch = useDispatch();
    const {items: campaigns, items: leads} = useSelector(state => state.campaigns, state => state.leads);

    const [activeTab, setActiveTab] = useState('campaign');

    useEffect(() => {
      if (activeTab === 'campaign') {
        dispatch(fetchCampaignThunk());
      } else if (activeTab === 'report') {
        dispatch(fetchReportThunk());
      }
    }, [activeTab]);

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
                  {activeTab === 'report' && <ReportLeads leads={leads}/>}
                  <Logout className="mr-2 h-4 w-4" />
                </div>
        </div>
    );
}