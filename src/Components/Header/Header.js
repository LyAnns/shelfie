import React,{ Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

class Header extends Component {
    render() {
        return (<div className="Header">
            
            <div className="Header-logo">
                 <img className="Header-logo-img" src="/logo.png" alt="logo"/>
            </div>
            <div className="Header-title">
                <div className="Header-title-text">Shelfie</div>
            </div>
            <div>
                <Link className="Header-button" to="/">
                    Dashboard
                </Link>
            </div>
            <div>
                <Link className="Header-button" to="/add">
                    Add to Inventory
                </Link>
            </div>
        </div>);
    }
}

export default Header;