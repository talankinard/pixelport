import minecraftjava from "../images/minecraftjava.png";
import cyberpunk from "../images/cyberpunk.png";
import mousepad from "../images/mousepad.png";
import keyboard from "../images/keyboard.webp";

const DealsItems = () => {
  return (
    <>
      <div id="deals-container">
        <div id="deals-left">
          <h2>Hot Deals Right Now</h2>
          <div className="grid">
            <article className="pop">
              <h3>Minecraft Java Edition</h3>
              <img id="mc-img" src={minecraftjava} alt="Minecraft Java Edition" />
              <p>
                <span className="old-price">$29.99</span>
                <span className="new-price">$19.99</span>
              </p>
            </article>

            <article className="pop">
              <h3>Cyberpunk 2077</h3>
              <img id="cyberpunk-img" src={cyberpunk} alt="Cyberpunk 2077" />
              <p>
                <span className="old-price">$59.99</span>
                <span className="new-price">$44.99</span>
              </p>
            </article>
          </div>
        </div>

        <div id="deals-right">
          <div className="grid">
            <article className="pop">
              <h3>Logitech Mousepad</h3>
              <img id="log-mouse" src={mousepad} alt="Logitech Mousepad" />
              <p>
                <span className="old-price">$19.99</span>
                <span className="new-price">$14.99</span>
              </p>
            </article>

            <article className="pop">
              <h3>Gaming Keyboard</h3>
              <img id="key" src={keyboard} alt="Gaming Keyboard" />
              <p>
                <span className="old-price">$39.99</span>
                <span className="new-price">$29.99</span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsItems;
