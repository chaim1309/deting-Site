import React from "react";
import { Link } from "react-router-dom";



function Header(){
    return(
        <div className="Header">
                 <Link className="link" to="/login"><button className="btnLogin"  >Login</button></Link>
        </div>
    );
}export default Header