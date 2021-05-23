import React from 'react'
import logo from '../logo.png'

export default function Navbar() {
    return (
        <div>
            <header>
                <input type="checkbox" id="checkbox"></input>
                <label for="checkbox" class="checkbutton"> &#9776;</label>
                    <a className="brandLogo" href="/">
                        <img src={logo} alt="Logo" className="logo-img"/>
                    </a>
                <br/> 
                <ul class="ul-navbar">
                    <li className="li-navbar"><a href="/Explore" >EXPLORE</a></li>
                    <li className="li-navbar"><a href="/Login">LOGIN</a></li>
                    <li className="li-navbar"><a href="/Register">REGISTER</a></li>
                </ul>
            </header>
                <hr/>
        </div>

    )
}
