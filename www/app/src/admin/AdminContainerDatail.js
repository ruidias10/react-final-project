import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Sidebar from './menu/Sidebar';
import Header from './components/Header';
import Loading from './components/Loading';
import BreadCrumb from './components/BreadCrumb';

import UserHasAuthenticated from '../../src/helpers/UserHasAuthenticated';
import { admin, endpoints } from '../config/Config.json';
import Api from '../services/Api';


class AdminContainerDatail extends Component {

  constructor(props) {
    super(props);

    this.listAdminPages = admin.pages;
    this.userHasAuthenticated = UserHasAuthenticated();

    this.state = {
      isLoading: true,
      pages: admin.pages,
      userHasAuthenticated: this.userHasAuthenticated
    };
  }

  async componentDidMount() {
    for (var [key, value] of Object.entries(endpoints)) {
      if (this.props.page === key) {
        this.requestData(key, value, this.props.paramid);
      }
    }    
  }  

  requestData = async (key, endpoint, paramid) => {
    this.setState({ 
      isLoading: true 
    });    

    const urlRequest = endpoint + paramid;
    const response = await Api.get(urlRequest);

    this.setState({
      [key]:response.data,
      isLoading: false
    });
  } 

  render() {
    const PageContent = this.props.container;

    if (this.state.userHasAuthenticated) {
      return (
        <div id="page-top">
          <Header user="Rui Dias" />
          <div id="wrapper">
            <Sidebar page={ this.props.page } pages={ this.state.pages }/>
            <div id="content-wrapper">
              <div className="container-fluid">
                <BreadCrumb page={ this.props.page } pages={ this.state.pages }/>
                { (!this.state.isLoading) 
                    ? (<PageContent data={ this.state[this.props.page] } click={ this.handlePageContent }/>) 
                    : (<Loading />) 
                }
              </div> 
          </div>
        </div>
      </div>
      );
    } else {
      return <Redirect to="/login" />;
    }      
  }
}

export default AdminContainerDatail;