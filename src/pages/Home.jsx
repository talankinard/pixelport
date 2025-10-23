import { useEffect, useState } from "react";
import "./../css/Home.css";


const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Equivalent to getPopItems()
    const fetchGames = async () => {
      try {
        const base =
          "https://talankinard.github.io/csce242/projects/part6/json/mainpage.json";
        const url = `${base}?v=${Date.now()}`; // live-refresh cache bust
        const response = await fetch(url);
        const data = await response.json();
        setGames(data); // expects an array (like your popItems)
      } catch (error) {
        console.error("Error loading popular items:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div id="home">
      <div id="popular-grid-wrap">
        <h2>What's Popular Right Now</h2>

        <div className="popular-grid">
          {games.map((game, index) => (
            <article className="pop" key={index}>
              <h3>{game.name}</h3>

              <div className="img-box">
                <img
                    src={`/json/images/${game.img}`}
                    alt={game.name}
                    className="game-img"
                />
              </div>

              <button
                className="btn-details"
                onClick={(e) => {
                  const details =
                    e.currentTarget.nextElementSibling;
                  const hidden = details.classList.toggle("hidden");
                  e.currentTarget.textContent = hidden
                    ? "More Details"
                    : "Hide Details";
                }}
              >
                More Details
              </button>

              <div className="card-details hidden">
                <p>{game.description}</p>
                <p>Price: {game.price}</p>
                <p>Rating: {game.rating}</p>

                {game.reviews && game.reviews.length > 0 && (
                  <>
                    <p>
                      <strong>Reviews:</strong>
                    </p>
                    <ul>
                      {game.reviews.map((review, i) => (
                        <li key={i}>{review}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;