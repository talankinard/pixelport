import { useEffect, useState } from "react";
import "./../css/Home.css";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("/json/Home.json");
        if (!res.ok) throw new Error("Failed to load JSON: " + res.status);
        const data = await res.json();
        setGames(data.popular || data);
      } catch (err) {
        console.error("Error fetching Home.json:", err);
      }
    };
    fetchGames();
  }, []);

  return (
    <div id="home">
      <section id="popular-grid-wrap">
        <h2>What's Popular Right Now</h2>
        <div className="popular-grid">
          {games.map((game, index) => (
            <article className="pop" key={index}>
              <div className="image">
                <img
                  src={`/json/images/${game.img}`}
                  alt={game.name}
                  className="game-img"
                />
              </div>
              <h3>{game.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;