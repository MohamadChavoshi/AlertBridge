import React, { useState } from 'react';
import Sidebar from './componant/Sidebar';
import HomePage from './componant/Pages/HomePage';
import ReportPage from './componant/Pages/ReportPage';
import Profile from './componant/Pages/Profile';
import AlertingPage from './componant/Pages/AlertingPage'; // Import the new AlertingPage
import './Main.css';

export const Main = () => {
  const [activeItem, setActiveItem] = useState('home');

  const renderPage = () => {
    switch (activeItem) {
      case 'home':
        return <HomePage />;
      case 'report':
        return <ReportPage />;
      case 'profile':
        return <Profile />;
      case 'alerting':
        return <AlertingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="main-container">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="content-container">
        {renderPage()}
      </div>
    </div>
  );
};

export default Main;