import React from 'react';

import BrandLogo from '../../Assets/brand/logo.svg';

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <div className="wrapper">
        <img src={BrandLogo} alt="HOPR" />
      </div>
    </div>
  );
};

export default LoginScreen;
