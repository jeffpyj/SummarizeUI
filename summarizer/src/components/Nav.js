import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSave } from '@fortawesome/free-regular-svg-icons'
import { faBars, faHighlighter, faCommentAlt, faInfo } from '@fortawesome/free-solid-svg-icons'
import '../styles/nav.css'

class Nav extends Component { 
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul className="main-menu" >
                        <li><FontAwesomeIcon icon={faBars}/></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faStar}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faHighlighter}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faCommentAlt}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faSave}/></Link></li>
                        <li><Link to="/"><FontAwesomeIcon icon={faInfo}/></Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav