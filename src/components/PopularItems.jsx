import React, { useEffect, useState } from "react";
import ItemPopup from "./ItemPopup";
import "../css/PopularItems.css"; // ✅ import your CSS file

const PopularItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("https://pixelport-server.onrender.com/api/popularItems")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load items");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => {
        console.error("Error:", err);
        setError("Error loading items");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section id="popular-items">
      <h2>Popular Right Now</h2>

      <div className="popular-grid">
        {items.map((item) => (
          <article
            key={item._id}
            className="pop-card"
            onClick={() => setSelectedItem(item)}
          >
            <img src={`https://pixelport-server.onrender.com/images/${item.img}`} alt={item.name}/>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>

      <ItemPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default PopularItems;
