import React from 'react';

export default function CampaignList({ campaigns }) {
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
              <td>{campaign.title}</td>
              <td>{campaign.title}</td>
              <td>{campaign.title}</td>
              <td>{campaign.title}</td>
              <td>Rp{campaign.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
         </div>
  );
}

