import React, { Component } from 'react';

import NavDropdownExample from './components/NavDropdownExample';
import ContainerHeader from './components/ContainerHeader';
import ContainerMoviesList from './components/ContainerMoviesList';
import FooterContainer from './components/FooterContainer'

class SiteContainer extends Component {

  constructor(props, context) {
    super(props, context);

    this.adventureCardImgs = [
      'http://localhost:8080/app/images/the-signal.jpg',
      'http://localhost:8080/app/images/cinderella.jpg',
      'http://localhost:8080/app/images/alien-covenant.jpg',
      'http://localhost:8080/app/images/x-men.jpg',
      'http://localhost:8080/app/images/i-am-duran.jpg',
      'http://localhost:8080/app/images/resident-evil-the-final-chapter.jpg',
      'http://localhost:8080/app/images/geostorm.jpg',
      'http://localhost:8080/app/images/the-mule.jpg'
    ];

    this.humorCardImgs = [
      'http://localhost:8080/app/images/2012.jpg',
      'http://localhost:8080/app/images/a-star-is-born-encore.jpg',
      'http://localhost:8080/app/images/captive-state.jpg',
      'http://localhost:8080/app/images/us.jpg',
      'http://localhost:8080/app/images/avengers-endgame.jpg',
      'http://localhost:8080/app/images/moana.jpg',
      'http://localhost:8080/app/images/gravity.jpg',
      'http://localhost:8080/app/images/atonement.jpg'
    ];
  }

  render() {
    return (
      <div className="bgDark">
        <NavDropdownExample />
        <ContainerHeader />
        <ContainerMoviesList category="Adventure" cardImgs={this.adventureCardImgs} />
        <ContainerMoviesList category="Humor" cardImgs={this.humorCardImgs} />
        <FooterContainer />
      </div>
    );      
  }
}


export default SiteContainer;