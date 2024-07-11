import React from 'react';
import './Dashboard.css';
import OutlineButton from '../Button/OutlineButton';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard-background'>
        <h2 data-aos='fade-right'>Exquisite designs for the </h2>
        <h1>embracing elegance and style.</h1>
        <OutlineButton />
      </div>
    </div>
  );
};

export default Dashboard;
