import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navigator extends Component {
  render() {
    const push = path => this.props.history.push(path);
    return (
      <div className="container-fluid mynav">
        <div className="row">
          <div
            className="col bg-secondary text-center  p-3 nav-items"
            onClick={_ => push("/")}
          >
            <a href='#'className="nav-icons">
              <i class="fas fa-home"></i>
            </a>
          </div>
          <div
            className="col bg-secondary text-center  p-3 nav-items"
            onClick={_ => push("/calendar")}
          >
            <a href='#' className="nav-icons">
              <i class="far fa-calendar-alt"></i>
            </a>
          </div>
          <div
            className="col bg-secondary text-center  p-3 nav-items"
            onClick={_ => push("/my_medicines")}
          >
            <a href='#'className="nav-icons">
              <i class="fas fa-capsules"></i>
            </a>
          </div>
          <div
            className="col bg-secondary text-center  p-3 nav-items"
            onClick={_ => push("/my_mentors")}
          >
            <a href='#'className="nav-icons">
              <i class="fas fa-users"></i>
            </a>
          </div>
          <div
            className="col bg-secondary text-center  p-3 nav-items"
            onClick={_ => push("/settings")}
          >
            <a href='#'className="nav-icons">
              <i class="fas fa-cog"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigator);
