import React, { Component } from "react";
import mainLogo from "../../public/images/logo.png";
import { SearchForm } from "./SearchForm";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="floating-header">
          <div className="container">
            <div className="row">
              <div className="col-md-7 align-self-center">
                <ul className="list-inline extra-links">
                  <li className="list-inline-item">
                    <a href="">Sign Up</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">Login</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">RSS Feeds</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="">Archived News</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 align-self-center">
                <ul className="list-inline social-links float-right">
                  <li className="list-inline-item">
                    <a href="" className="in">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="tw">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="pt">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="gp">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="" className="rs">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <a className="slide_btn">-</a>
            </div>
          </div>
        </div>
        <div className="navigation-wrap start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light p-sm-0 p-md-0 p-lg-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav py-4 py-md-0">
                      <li className="nav-item pl-4 pl-md-0 ml-0 active">
                        <a className="nav-link" href="#">
                          HOME PAGE
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          STYLE DEMO
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          FULL WIDTH
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          DROPDOW
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          GALLERY
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          PORTFOLIO
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          LINK TEXT
                        </a>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0">
                        <a className="nav-link" href="#">
                          LONG LINK TEXT
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row logo_container">
              <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                <img src={mainLogo} alt="NoBodysFool" className="mainlogo" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 align-self-center">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
