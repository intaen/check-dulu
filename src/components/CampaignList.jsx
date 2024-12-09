import React from 'react';

export default function CampaignList({ campaigns }) {
  return (
    <div>
      <h2>Campaign List</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Campaign Name</th>
            <th>Campaign Desc</th>
            <th>Product Image</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => {
            const desc = campaign.campaign_desc
            return (
            <tr key={campaign.campaign_id}>
              <td>{campaign.category}</td>
              <td>{campaign.campaign_name}</td>
              <td dangerouslySetInnerHTML={{__html: desc}}></td>
              <td><img height={100} width={100} src={campaign.product_image}/></td>
              <td>Rp{campaign.product_price}</td>
            </tr>
          )}
        )}
        </tbody>
      </table>
         </div>
  );
}

