import React from 'react';
import MenuItem from './MenuItem';

const Sidebar = ({page, pages}) => {
  let rowsMenu = []
  const items = pages;

  items.forEach((item, index) => {
    rowsMenu.push (<MenuItem key={index} page={page} name={item.name} route={item.route} bootstrapClassName={item.bootstrapClassName} />) 
  });  

  return (
    <ul className="sidebar navbar-nav">
      {rowsMenu}
    </ul>
  );
}

export default Sidebar;