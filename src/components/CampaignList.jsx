import React from 'react';
import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';


export default function CampaignList({ campaigns }) {
  const [html, setHtml] = useState('');

  function onChange(e) {
    setHtml(e.target.value);
  }
  
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
            <tr key={campaign.campaign_id}>
              <td>{campaign.campaign_id}</td>
              <td>{campaign.category}</td>
              <td>{campaign.campaign_name}</td>
              <td>{campaign.campaign_desc}</td>
              <td><img height={100} width={100} src={campaign.product_image}/></td>
              <td>Rp{campaign.product_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
         </div>
  );
}

