import React from 'react';
import ItemsMenu from '../atoms/items-menu';

export default function MenuMobile({ activaMenu }) {
  return (
    <div className={'menu-mobile ' + (activaMenu ? 'open' : '')}>
      <div>
        <ItemsMenu
          activaMenu={() => {
            activaMenu();
          }}
        />
      </div>
    </div>
  );
}
