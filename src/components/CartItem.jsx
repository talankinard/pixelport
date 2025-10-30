import mic from "../images/blueyetimic.png"
import gpu from "../json/images/gpu.png"
import skyrim from "../images/skyrim.png"
import headset from "../json/images/headset.webp"
import cyberpunk from "../images/cyberpunk.png"
import minecraft from "../images/minecraft.png"

const CartItem = () =>
{
    return (
        <div className="cart-grid">
            <article className="cart-item">
                <img src={mic} alt="Blue Yeti Mic" />
                <h4 className="item-title">Blue Yeti Mic</h4>
            </article>

            <article className="cart-item">
                <img src={gpu} alt="NVIDIA RTX 4090" />
                <h4 className="item-title">NVIDIA RTX 4090</h4>
            </article>

            <article className="cart-item">
                <img src={skyrim} alt="Skyrim" />
                <h4 className="item-title">Skyrim</h4>
            </article>

            <article className="cart-item">
                <img src={headset} alt="Turtle Beach Headset" />
                <h4 className="item-title">Turtle Beach Headset</h4>
            </article>

            <article className="cart-item">
                <img src={cyberpunk} alt="Cyberpunk 2077" />
                <h4 className="item-title">Cyberpunk 2077</h4>
            </article>

            <article className="cart-item">
                <img src={minecraft} alt="Minecraft Java Edition" />
                <h4 className="item-title">Minecraft Java Edition</h4>
            </article>
        </div>
    )
}

export default CartItem
