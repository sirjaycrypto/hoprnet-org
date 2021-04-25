import React from 'react';

import BrandLogo from '../../assets/brand/logo.svg';

const HomeScreen = () => {
  return (
    <div className="login-screen">
      <div className="wrapper">
        <img src={BrandLogo} alt="HOPR" />
      </div>
    </div>
  );
};

export default HomeScreen;
