import React, { useEffect, useState } from "react";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/json/Home.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load popular items.");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error loading items.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading popular items...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <section id="popular-items">
      <h2>Popular Right Now</h2>

      <div className="popular-grid">
        {items.map((item) => (
          <article key={item._id} className="pop-card">
            <img src={`json/images/${item.img}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="rating">{item.rating}/5</p>
            <p className="desc">{item.description}</p>

            <details>
              <summary>Reviews ({item.reviews.length})</summary>
              <ul>
                {item.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
