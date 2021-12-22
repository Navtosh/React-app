import React, { Component } from "react";
import { ContactForm } from "./ContactForm";

//import DeviceImg from "../../public/images/respon.png";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 my-4">
              <h5>ABOUT US</h5>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/215x90/232323/ffffff.png"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet,
                        <br /> consectetur adipiscing elit. Nunc
                        <br />
                        non diam erat. In fringilla massa ut
                        <br /> nisi ullamcorper pellentesque.
                        <br /> Quisque non luctus sem. Nullam <br /> non magna
                        vel nisi posuere
                        <br /> bibendum vitae sed dui.
                      </p>
                      <a href="">
                        Read More <i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-4">
              <h5>QUICK LINKS</h5>
              <div className="row">
                <div className="col-12">
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a href="">Lorem ipsum dolor sit</a>
                    </li>
                    <li>
                      <a href="">Amet consectetur</a>
                    </li>
                    <li>
                      <a href="">Praesent vel sem id</a>
                    </li>
                    <li>
                      <a href="">Curabitur hendrerit est</a>
                    </li>
                    <li>
                      <a href="">Aliquam eget erat nec sapien </a>
                    </li>
                    <li>
                      <a href="">Cras id augue nunc </a>
                    </li>
                    <li>
                      <a href="">In nec justo non </a>
                    </li>
                    <li>
                      <a href="">Vivamus mollis enim ut </a>
                    </li>
                    <li>
                      <a href="">Curabitur hendrerit est </a>
                    </li>
                    <li>
                      <a href="">Sed a nulla urna </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-4">
              <h5>LATEST BLOG POSTS</h5>
              <div className="row">
                <div className="col-12">
                  <ul className="list-unstyled">
                    <li className="media">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Post Title</h5>
                        <h6>
                          Admin, domainname.com <br />
                          Friday, 6th April 2000
                        </h6>
                        <p>
                          Nulla facilisi. Ut fringilla. Suspendisse potenti.
                          Nunc feugiat mi a tellus consequat imperdiet.
                        </p>
                        <a href="">
                          Read More <i className="fa fa-angle-double-right"></i>
                        </a>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Post Title</h5>
                        <h6>
                          Admin, domainname.com <br />
                          Friday, 6th April 2000
                        </h6>
                        <p>
                          Nulla facilisi. Ut fringilla. Suspendisse potenti.
                          Nunc feugiat mi a tellus consequat imperdiet.
                        </p>
                        <a href="">
                          {" "}
                          Read More <i className="fa fa-angle-double-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-4">
              <h5>CONTACT US</h5>
              <div className="row">
                <div className="col-12">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
