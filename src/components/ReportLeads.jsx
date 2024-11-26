import React, { useState, useEffect } from 'react';

export default function ReportLeads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch leads from an API or load from local storage
    const mockLeads = [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
    ];
    setLeads(mockLeads);
  }, []);

  return (
    <div className="report-leads">
      <h2>Lead Report</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
