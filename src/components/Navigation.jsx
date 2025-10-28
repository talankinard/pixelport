import {Link} from "react-router-dom";
import "./../css/Navigation.css";
import "./../css/global.css";
import {useState} from "react";

const Navigation = () =>
{
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => 
    {
        setMenuOpen(!menuOpen);
    };

    return (
       <section id="whole-nav">
            <h1>PixelPort</h1>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} id="hamburger-wrapper" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div id="small-nav" className={menuOpen ? "active" : "hide-small"}>
                <Link to="/Cart" className="cart-link" >Cart</Link>
                <Link to="/Login" className="login-links" >Login</Link>
            </div>
            <nav id="top-nav">
                <ul id="nav-items" className={menuOpen ? "active" : "hide-small"}>
                     <li><Link to="/Home" className="nav-link">Home</Link></li>
                    <li><Link to="/Browse" className="nav-link" >Browse</Link></li>
                    <li><Link to="/Deals" className="nav-link" >Deals</Link></li>
                    <li><Link to="/News" className="nav-link" >News</Link></li>
                    <li><Link to="/FAQ" className="nav-link" >FAQ</Link></li>
                    <li><Link to="/Contact" className="nav-link" >Contact Us</Link></li>
                </ul>
            </nav>
        </section>
    )
};

export default Navigation;