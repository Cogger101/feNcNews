import { Link } from "react-router-dom"
import Profile from "./Profile"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/articles" >Home</Link>
            <Link> Topics</Link>
            <Link to="/articles"> Articles</Link>
            <Link> Authors</Link>
            <Link> Profile</Link>
        </nav>
    )
}

export default NavBar