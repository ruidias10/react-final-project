import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavBar = () => (
  <footer className="footer clearfix">
    <div className="container">
      
      <div className="row text-center d-flex justify-content-center pt-5 mb-3">  
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/about">About us</Link>
          </h6>
        </div>
      </div>
      
      <hr className="rgba-white-light" />
        
      <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
        <div className="col-md-8 col-12 mt-5">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        </div>
      </div>
      
      <hr className="clearfix d-md-none rgba-white-light" />
      
      <div className="row pb-3 pt-3">
        <div className="col-md-12 flex-center">
          
          <div className="flex-center text-center">
            <a className="fb-ic" href="https://fab.com/">
              <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
            </a>
            
            <a className="tw-ic" href="https://fab.com/">
              <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
            </a>
            
            <a className="gplus-ic" href="https://fab.com/">
              <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
            </a>
            
            <a className="li-ic" href="https://fab.com/">
              <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
            </a>
            
            <a className="ins-ic" href="https://fab.com/">
              <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
            </a>
            
            <a className="pin-ic" href="https://fab.com/">
              <i className="fab fa-pinterest fa-lg white-text"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://getbootstrap.com/"> bootstrap.com</a>
    </div>
  
  </footer>
);
  
  export default FooterNavBar;