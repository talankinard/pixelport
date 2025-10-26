import "./../components/Navigation"
import "./../css/Cart.css";
import CartItem from "./../components/CartItem";

const Cart = () =>
{
    return (
        <main id="login-wrapper">
            <section className="cart-panel">
                <h3 className="title">Your Cart</h3>
                <CartItem />
            </section>
        </main>
    )
}

export default Cart
