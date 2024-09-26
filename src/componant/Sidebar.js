import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faGear, faChartPie } from '@fortawesome/free-solid-svg-icons';
import '../componantStyle/Sidebar.css';

export const Sidebar = ({ activeItem, setActiveItem }) => {
  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => setActiveItem('home')}
      >
        <FontAwesomeIcon icon={faHome} className="icon" />
      </div>
      <div
        className={`sidebar-item ${activeItem === 'report' ? 'active' : ''}`}
        onClick={() => setActiveItem('report')}
      >
        <FontAwesomeIcon icon={faChartPie} className="icon" />
      </div>
      <div
        className={`sidebar-item ${activeItem === 'alerting' ? 'active' : ''}`}
        onClick={() => setActiveItem('alerting')}
      >
        <FontAwesomeIcon icon={faBell} className="icon" />
      </div>
      <div
        className={`sidebar-item ${activeItem === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveItem('profile')}
      >
        <FontAwesomeIcon icon={faGear} className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;