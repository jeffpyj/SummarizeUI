import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import { faBars, faHighlighter, faCommentAlt, faInfo, faHistory , faStar} from '@fortawesome/free-solid-svg-icons'
import '../styles/nav.css'

class Nav extends Component { 
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        }
        
        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }
      
    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
              document.removeEventListener('click', this.closeMenu)
            })
        }
    }
    
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul className="main-menu" >
                        <li><FontAwesomeIcon icon={faBars} onClick={this.showMenu}/></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faStar}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faHighlighter}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faCommentAlt}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faSave}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faInfo}/></Link></li>
                    </ul>
                </nav>
                {
                    this.state.showMenu ? (
                        <div 
                            className="menu"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}>
                            <ul>
                                <li> History &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="icons" icon={faHistory}/></li>
                                <div className="line"></div>
                                <li> Document 1</li>
                                <li> Document 2</li>
                                <li> Document 3</li>
                                <li> Document 4</li>
                                <li> Document 5</li>
                                <br/>
                                <li> Favorites &nbsp; <FontAwesomeIcon className="icons" icon={faStar}/></li>
                                <div className="line"></div>
                                <li> Document 1</li>
                                <li> Document 4</li>
                                <li> Document 5</li>
                            </ul>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        )
    }
}

export default Nav