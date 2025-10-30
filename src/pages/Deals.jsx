import minecraftjava from "../images/minecraftjava.png";
import cyberpunk from "../images/cyberpunk.png";
import mousepad from "../images/mousepad.png";
import keyboard from "../images/keyboard.webp";
import DealItem from "../components/DealItem";
import FeaturedDeal from "../components/FeaturedDeal";
import "../css/Deals.css";

const Deals = () => {
  return (
    <div>
        <div id="deals-container">
        <div id="deals-left">
            <h2>Hot Deals Right Now</h2>
            <div className="grid">
            <DealItem
                title="Minecraft Java Edition"
                imgSrc={minecraftjava}
                alt="Minecraft Java Edition"
                oldPrice="29.99"
                newPrice="19.99"
            />
            <DealItem
                title="Cyberpunk 2077"
                imgSrc={cyberpunk}
                alt="Cyberpunk 2077"
                oldPrice="59.99"
                newPrice="44.99"
            />
            </div>
        </div>

        <div id="deals-right">
            <div className="grid">
            <DealItem
                title="Logitech Mousepad"
                imgSrc={mousepad}
                alt="Logitech Mousepad"
                oldPrice="19.99"
                newPrice="14.99"
            />
            <DealItem
                title="Gaming Keyboard"
                imgSrc={keyboard}
                alt="Gaming Keyboard"
                oldPrice="39.99"
                newPrice="29.99"
            />
            </div>
        </div>
        </div>
        <FeaturedDeal />
    </div>
  );
};

export default Deals;
