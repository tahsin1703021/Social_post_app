import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Facebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active" style={{marginRight:'10px'}}>
                <button type="button" className="btn btn-primary">
                  Like <span className="badge badge-light">{this.props.like}</span>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-primary">
                  Dislike <span className="badge badge-light">{this.props.dislike}</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
