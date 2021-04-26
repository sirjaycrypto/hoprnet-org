import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const SettingsModal = () => {
  return (
    <>
      <div className="settings-card">
        <FontAwesomeIcon
          icon={faCog}
          className="anticon"
          mask="square-full"
          color="white"
        />
      </div>
    </>
  );
};
export default SettingsModal;
