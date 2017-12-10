import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li>
            <div className="preloader-wrapper small active">
              <div className="spinner-layer spinner-green-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div><div className="gap-patch">
                  <div className="circle" />
                </div><div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </li>);
      case false:
        return (<li>
          <a href="/auth/google">Sign with Google</a>
        </li>
        );
      default:
        return (
          <><li>
            <Payments />
          </li><li>
            <a href="/api/logout">Logout</a>
          </li></>
        );
    }
  }
  render() {
    console.log('Header Props', this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
