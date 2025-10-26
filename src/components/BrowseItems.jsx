import eldenring from "../images/eldenring.png";
import amongus from "../images/amongus.png";
import minecraft from "../images/minecraft.png";
import skyrim from "../images/skyrim.png";
import powerwash from "../images/powerwash.png";
import fallout from "../images/fallout.png";

import ps5 from "../images/ps5.webp";
import xbox from "../images/xbox.png";
import blueyetimic from "../images/blueyetimic.png";
import turtlebeach from "../images/turtlebeach.webp";
import razer from "../images/razer.png";
import monitor from "../images/monitor.png";

const BrowseItems = () => {
  return (
    <>
      <div className="catalog">
        <div id="left">
          <h2>Games</h2>

          <article className="pop">
            <section className="image">
              <img src={eldenring} alt="Elden Ring" />
            </section>
            <h3>Elden Ring</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={amongus} alt="Among Us" />
            </section>
            <h3>Among Us</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={minecraft} alt="Minecraft" />
            </section>
            <h3>Minecraft</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={skyrim} alt="Skyrim" />
            </section>
            <h3>Skyrim</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={powerwash} alt="Power Wash Simulator" />
            </section>
            <h3>Power Wash Sim.</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={fallout} alt="Fallout 4" />
            </section>
            <h3>Fallout 4</h3>
          </article>
        </div>
        
        <div id="right">
          <h2>Consoles / Accessories</h2>

          <article className="pop">
            <section className="image">
              <img src={ps5} alt="Playstation 5" />
            </section>
            <h3>PlayStation 5</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={xbox} alt="Xbox Series X" />
            </section>
            <h3>Xbox Series X</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={blueyetimic} alt="Blue Yeti Microphone" />
            </section>
            <h3>Blue Yeti Microphone</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={turtlebeach} alt="Turtle Beach Headset" />
            </section>
            <h3>Turtle Beach Headset</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={razer} alt="Razer Mouse" />
            </section>
            <h3>Razer Mouse</h3>
          </article>

          <article className="pop">
            <section className="image">
              <img src={monitor} alt="Gaming Monitor" />
            </section>
            <h3>Gaming Monitor</h3>
          </article>
        </div>
      </div>
    </>
  );
};

export default BrowseItems;
