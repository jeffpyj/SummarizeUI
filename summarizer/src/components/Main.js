import React, { Component } from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload} from '@fortawesome/free-solid-svg-icons'
import "../styles/main.css"
class Main extends Component {
    render() {
        return (
            <div className>
                <Nav/>
                <div className="main">
                    <FontAwesomeIcon icon={faUpload} className="upload"/>
                </div>
            </div>
        )
    }
}

export default Main

