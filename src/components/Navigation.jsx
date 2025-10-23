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
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="browse.html">Browse</a></li>
                    <li><a href="deals.html">Deals</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="contact-us.html">Contact/About</a></li>
                </ul>
            </nav>
        </section>
    )
};

export default Navigation;