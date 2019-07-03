import React from 'react';
import { Link } from 'react-router-dom'
import Capitalize from '../../helpers/Capitalize';

const MenuItem = ({page, name, route, bootstrapClassName}) => (
  <li className={"nav-item" + (isLinkActive(page, name) ? " active" : "")}>
  <Link className="nav-link" to={route}>
    <i className={bootstrapClassName}></i>
    <span>&nbsp;{Capitalize(name)}</span>
  </Link>
</li>
);

const isLinkActive = (page, name) => page === name;

export default MenuItem;