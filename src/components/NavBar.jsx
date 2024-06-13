import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/articles" >Home</Link>
            <Link> Topics</Link>
            <Link> Articles</Link>
            <Link> Authors</Link>
        </nav>
    )
}

export default NavBar