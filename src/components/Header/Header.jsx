import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";


function Header() {
    return (
        <>
            <div className="background-image bg-[url('https://www.rayhan.dev/images/blackgrit.png')]">
                <Navbar />
                <Hero />

            </div>
        </>
    );
}

export default Header;