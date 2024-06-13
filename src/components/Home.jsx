import Header from "./Header"
import NavBar from "./NavBar"

function Home() {
    return (
        <>
            <NavBar />
            <h1 className="WelcomeHeading">Welcome to... </h1>
            <Header />
        </>
    )
}

export default Home