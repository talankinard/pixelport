import helldiverstwo from "../images/Helldivers-2-Logo.png"
import marvelrivals from "../images/marvelrivals_300x200.png"
import steelseriesheadset from "../images/headset.webp"
import nvidia4090 from "../images/gpu.png"
import oculusquest from "../images/oculus.png"
import switchtwo from "../images/switch2.png"
import hallowknightsilksong from "../images/hallowknightsilk.webp"
import expedition33 from "../images/clairobscurexp33.webp"
import elgatostreamdeck from "../images/streamdeck.png"

const PopularItems = () =>
{
    return (
        <div id="popular-grid-wrap">
            <h1>What's Popular Right Now</h1>
            <div className="popular-grid">
                <div className="home-item">
                    <img id="helldiverstwo" src={helldiverstwo} alt="Helldivers Two"/>
                    <h2>Helldivers Two</h2>
                </div>
                <div className="home-item">
                    <img id="marvelrivals" src={marvelrivals} alt="Marvel Rivals"/>
                    <h2>Marvel Rivals</h2>
                </div>
                <div className="home-item">
                    <img id="steelseriesheadset" src={steelseriesheadset} alt="Steel Series Headset"/>
                    <h2>SteelSeries Headset</h2>
                </div>
                <div className="home-item">
                    <img id="nvidia4090" src={nvidia4090} alt="Nvidia 4090 GPU"/>
                    <h2>NVIDIA 4090 GPU</h2>
                </div>
                <div className="home-item">
                    <img id="oculusquest" src={oculusquest} alt="Oculus Quest Two"/>
                    <h2>Oculus Quest Two</h2>
                </div>
                <div className="home-item">
                    <img id="switchtwo" src={switchtwo} alt="Nintendo Switch Two"/>
                    <h2>Nintendo Switch Two</h2>
                </div>
                <div className="home-item">
                    <img id="hallowknightsilk" src={hallowknightsilksong} alt="Hallow Knight Silksong"/>
                    <h2>Hallow Knight: Silksong</h2>
                </div>
                <div className="home-item">
                    <img id="expedition33" src={expedition33} alt="Clair Obscur Expedition 33"/>
                    <h2>Clair Obscur: Expedition 33</h2>
                </div>
                <div className="home-item">
                    <img id="elgatostreamdeck" src={elgatostreamdeck} alt="Elgato Stream Deck"/>
                    <h2>Elgato Stream Deck</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularItems;