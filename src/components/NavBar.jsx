import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNewspaper, faFolder, faUser, faPenNib } from "@fortawesome/free-solid-svg-icons";




function NavBar() {

    return (
        <nav className="navbar">

            <Link className="navbar-btn" to="/articles" ><FontAwesomeIcon icon={faHouse} /> Home</Link>
            <Link className="navbar-btn"><FontAwesomeIcon icon={faFolder} /> Topics</Link>
            <Link className="navbar-btn" to="/articles"><FontAwesomeIcon icon={faNewspaper} /> Articles</Link>
            <Link className="navbar-btn"><FontAwesomeIcon icon={faPenNib} /> Authors</Link>
            <Link className="navbar-btn"><FontAwesomeIcon icon={faUser} /> Profile</Link>
        </nav>
    )
}

export default NavBar