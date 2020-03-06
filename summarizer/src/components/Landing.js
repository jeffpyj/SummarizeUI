import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <div className="login-container">
                    <form className="form">
                        <h1>Welcome Back</h1>
                        <p>Please enter your login credentials</p>
                        <div className="input-container">
                            <FontAwesomeIcon className="icon" icon={faUser}/>
                            <input type="text" placeholder="Username" name="username" required/>
                        </div>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faKey} className="icon"/>
                            <input type="password" placeholder="Password" name="password" required/>
                        </div>
                        <button type="submit">Login</button>
                        <Link to="/"><span class="forgot">Forgot password?</span></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Landing