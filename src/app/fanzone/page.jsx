// page.jsx

import React from 'react';
import './page.css'; // Import the standard CSS file

const FanZone = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to the Fan Zone</h1>
      <p>This is the Fan Zone page. You can add your content here.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 4</li>
      </ul>
      {/* Add more content specific to the Fan Zone page */}
    </div>
  );
};

export default FanZone;
