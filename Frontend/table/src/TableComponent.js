import React, { useState, useEffect } from 'react';
import './index.css'; // Import your index.css file

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all') // Adjust the URL to match your backend route
      .then(response => response.json())
      .then(data => setTableData(data));
  }, []);

  const tableStyles = {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#9f76b8',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyles = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const tableRowStyles = {
    borderBottom: '1px solid #ddd',
  };

  const tableCellStyles = {
    padding: '10px',
  };

  const tableRowHoverStyles = {
    backgroundColor: '#e5c6f7',
  };

  return (
    <div style={tableStyles}>
      <h1 style={headingStyles}>Teacher Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableCellStyles}>Teacher ID</th>
            <th style={tableCellStyles}>Teacher Name</th>
            <th style={tableCellStyles}>Phone No</th>
            <th style={tableCellStyles}>Email</th>
            <th style={tableCellStyles}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.teacher_id} style={tableRowHoverStyles}>
              <td style={{ ...tableCellStyles, ...tableRowStyles }}>{item.teacher_id}</td>
              <td style={{ ...tableCellStyles, ...tableRowStyles }}>{item.teacher}</td>
              <td style={{ ...tableCellStyles, ...tableRowStyles }}>{item.phone_no}</td>
              <td style={{ ...tableCellStyles, ...tableRowStyles }}>{item.email}</td>
              <td style={{ ...tableCellStyles, ...tableRowStyles }}>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
