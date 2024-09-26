import React, { useState } from 'react';
import GridCard from '../Objects/GridCard';
import ConfigurationForm from '../FormContact';
import './PageStyle/ReportPage.css';

const ReportPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="report-page">
      <div className="header">
        <span className="workspace-label">Contact Points</span>
      </div>
      <div className="report-content">
        <h1 className="report-title">Setup & Configurations</h1>
        <div className="report-grid">
          <GridCard contactPoint={selectedPlatform || "Telegram"} />
          <GridCard
            title="Failed"
            number={11}
            titleColor={"#FF3B30"}
          />
          <GridCard
            title="Resolved"
            number={22}
            titleColor={"#2156BC"}
          />
        </div>
        <div className="configuration-section">
          <ConfigurationForm onPlatformChange={handlePlatformChange} />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
