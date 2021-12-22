import React, { Component } from "react";
import DeviceImg from "../../public/images/respon.png";

export class MainContaint extends Component {
  render() {
    return (
      <div className="container-fluid white_bg">
        <div className="justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center">
                <img src={DeviceImg} alt="NoBodysFool" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center tile_container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center">
                    <div className="card mb-md-3">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/85x80/333333/ffffff.png"
                        alt=""
                        height="80"
                        width="85"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Vivamuslibero Augue</a>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc non diam erat. In fringilla massa ut nisi
                          ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center">
                    <div className="card mb-md-3">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/85x80/333333/ffffff.png"
                        alt=""
                        height="80"
                        width="85"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Vivamuslibero Augue</a>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc non diam erat. In fringilla massa ut nisi
                          ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/85x80/333333/ffffff.png"
                        alt=""
                        height="80"
                        width="85"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Vivamuslibero Augue</a>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc non diam erat. In fringilla massa ut nisi
                          ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 align-self-center">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/85x80/333333/ffffff.png"
                        alt=""
                        height="80"
                        width="85"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Vivamuslibero Augue</a>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc non diam erat. In fringilla massa ut nisi
                          ullamcorper pellentesque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
