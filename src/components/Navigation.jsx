import {Link} from "react-router-dom";
import "./../css/Navigation.css";
import "./../css/global.css";

const Navigation = () =>
{
    return (
       <section id="whole-nav">
            <h1>PixelPort</h1>
            <div id="toggle-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="small-nav">
                <a href="cart.html" class="cart-link">Cart</a>
                <a href="login.html" class="signin-link">Sign In</a>
            </div>
            <nav id="top-nav">
                <ul id="nav-items" class="hide-small">
                    <li><Link to="/Home" className="nav-link">Home</Link></li>
                    <li><Link to="/Browse" className="nav-link">Browse</Link></li>
                    <li><Link to="/Deals" className="nav-link">Deals</Link></li>
                    <li><Link to="/News" className="nav-link">News</Link></li>
                    <li><Link to="/FAQ" className="nav-link">FAQ</Link></li>
                    <li><Link to="/Contact" className="nav-link">Contact Us</Link></li>
                </ul>
            </nav>
        </section>
    )
};

export default Navigation;