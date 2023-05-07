import React from "react";
import { Link } from "react-router-dom";
import './Header.css';



function Header() {
    return (
        <div className="Header">
            <div className="button">




                <Link className="link" to="/login"><button className="btnLogin"  >Login</button></Link>


            </div>


        </div>
    );
} export default Header