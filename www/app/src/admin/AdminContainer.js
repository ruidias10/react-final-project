import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Sidebar from './menu/Sidebar';
import Header from './components/Header';
import Loading from './components/Loading';
import BreadCrumb from './components/BreadCrumb';

import UserHasAuthenticated from '../../src/helpers/UserHasAuthenticated';
import { admin, endpoints } from '../config/Config.json';
import Api from '../services/Api';

import { Context } from '../store/Context';



class AdminContainer extends Component {

  constructor(props) {
    super(props);

    this.searchMovies = false;
    this.userHasAuthenticated = UserHasAuthenticated();
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    this.preparesLoadData();
  }

  handlePagination = (pageNumber) => {
    this.preparesLoadData(pageNumber);  
  }  

  componentDidUpdate() {
    this.searchMovies = false;
  }

  handleSearch = async (search) => {
    this.setState({ isLoading: true });
    this.searchMovies = await this.context.searchMovies(search);
    this.setState({ isLoading: false });
  }

  preparesLoadData = async (pageNumber) => {
    let response = {};
    this.setState({ isLoading: true });

    for (var [key, value] of Object.entries(endpoints)) { 
      response = await this.requestData(key, value, pageNumber);
      this.context.addData(key, response.data);
    }

    this.setState({ isLoading: false });
  }

  requestData = async (key, endpoint, pageNumber) => {
    const urlRequest = (typeof pageNumber !== 'undefined') 
      ? endpoint + '?page=' + pageNumber
      : endpoint;

    return await Api.get(urlRequest);
  }

  render() {
    const PageContent = this.props.container;
    let dataContent = (!this.searchMovies) ? this.context.getDataByKey(this.props.page) : this.searchMovies;

    if (this.userHasAuthenticated) {
      return (
        <div id="page-top">
          <Header user={ this.userHasAuthenticated } click={ this.handleSearch }/>
          <div id="wrapper">
            <Sidebar page={ this.props.page } pages={ admin.pages }/>
            <div id="content-wrapper">
              <div className="container-fluid">
                <BreadCrumb page={ this.props.page } pages={ admin.pages }/>
                { (!this.state.isLoading) 
                    ? (<PageContent data={ dataContent } click={ this.handlePagination }/>) 
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

AdminContainer.contextType = Context;

export default AdminContainer;