import React from 'react';
import GridCard from '../Objects/GridCard';
import Table from '../Objects/Table';
import SearchBar from '../Objects/Atom/SearchBar';
import './PageStyle/HomePage.css'; // Make sure to import the CSS file

const HomePage = () => {
  const handleAddContactPoint = () => {
    console.log('Add Contact Point clicked');
  };

  const tableData = [
    { contactPoint: 'Telegram', id: '#538421', resolved: 5, failed: 3, alertLang: 'en' },
    { contactPoint: 'Element', id: '#622014', resolved: 3, failed: 4, alertLang: 'fa' },
    { contactPoint: 'Slack', id: '#123456', resolved: '-', failed: '-', alertLang: 'fa' },
    { contactPoint: 'Teams', id: '#210313', resolved: 1, failed: 1, alertLang: 'en' },
    { contactPoint: 'Email', id: '#321312', resolved: 13, failed: 3, alertLang: 'en' },
  ];

  return (
    <div>
      <div className="header-Home">
        <span className="workspace-label">Dashboard</span>
        <div className="search-bar-container">
          <SearchBar />
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
        <GridCard
          title="Contact Point"
          description="Create a new contact point to send alerts"
          buttonText="Add Contact Point"
          onButtonClick={handleAddContactPoint}
        />
        <GridCard
          title="Failed"
          number={11}
          total={100}
          completed={25}
          titleColor={"#FF3B30"}
        />
        <GridCard
          title="Resolved"
          number={22}
          total={100}
          completed={75}
          titleColor={"#2156BC"}
        />
      </div>
      <div style={{ height: "50px" }}></div>
      <Table data={tableData} />
    </div >
  );
};

export default HomePage;

