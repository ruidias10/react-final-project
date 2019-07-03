import React from 'react';
import { Link } from 'react-router-dom'
import Capitalize from '../../helpers/Capitalize'

const BreadCrumb = ({page}) => (
  <ol className="breadcrumb">
    {renderDashboardLink(page)}
    <li className="breadcrumb-item active">{(pageName(page))}</li>
  </ol>
);

const pageName = (page) => (page) ? Capitalize(page) : 'Unknown page';

const renderDashboardLink = (page) => (page !== 'dashboard') ? <li className="breadcrumb-item"><Link to="/admin/dashboard">&nbsp;Dashboard</Link></li> : '';

export default BreadCrumb;