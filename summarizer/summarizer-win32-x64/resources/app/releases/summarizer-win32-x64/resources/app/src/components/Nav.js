import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faHighlighter,
  faCommentAlt,
  faInfo,
  faHistory,
  faStar,
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import "../styles/nav.css";
import { Main } from "./Main.js";
import { Documents } from "./Document.js";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      favorited: false,
      fav: ""
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.favorite = this.favorite.bind(this);
    this.info = this.info.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
    this.state.history = Main.files;
    console.log(this.state.history);
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  favorite(f) {
    if (!this.state.favorited) {
      this.state.fav = "Concept_Proposal.pdf";
    } else {
      this.state.fav = "";
    }
    this.state.favorited = !this.state.favorited;
  }

  info() {
    alert(
      "Menu: View previous upload history and favorites\nClick the star to favorite the document.\nClick the floppy disk to save and download the document."
    );
  }

  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul className="main-menu">
            <li>
              <FontAwesomeIcon icon={faBars} onClick={this.showMenu} />
            </li>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <button className="buttons" onClick={this.favorite}>
                <FontAwesomeIcon icon={faStar} />
              </button>
            </li>
            <li>
              <button className="buttons" onClick={this.info}>
                <FontAwesomeIcon icon={faInfo} />
              </button>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <Link to="/" className="signout">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Link>
            </li>
          </ul>
        </nav>
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <ul>
              <li>
                History &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon className="icons" icon={faHistory} />
              </li>
              <div className="line"></div>
              <li>{this.props.myProp}</li>
              <br />
              <li>
                Favorites &nbsp;
                <FontAwesomeIcon className="icons" icon={faStar} />
              </li>
              <div className="line"></div>
              <li> {this.state.fav}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Nav;
