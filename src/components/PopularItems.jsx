import React, { useEffect, useState } from "react";
import ItemPopup from "./ItemPopup";
import "../css/PopularItems.css";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  
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

  //delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    const res = await fetch(
      `https://pixelport-server.onrender.com/api/popularItems/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setItems(items.filter((item) => item._id !== id));
    } else {
      alert("Error deleting item");
    }
  };
  //edit
  const handleEdit = (item) => {
    const newName = prompt("Enter new name:", item.name);
    if (!newName) return;

    const updatedItem = {
      name: newName,
      price: item.price,
      description: item.description,
      rating: item.rating,
      reviews: item.reviews,
    };

    fetch(
      `https://pixelport-server.onrender.com/api/popularItems/${item._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(items.map((i) => (i._id === item._id ? data.data : i)));
      })
      .catch(() => alert("Error editing item"));
  };
  //add new item
  const handleAddItem = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch(
      "https://pixelport-server.onrender.com/api/popularItems",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.ok) {
      const data = await res.json();
      setItems([...items, data.data]);
      setShowAddForm(false);
    } else {
      alert("Error adding item");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>; 
  return (
    <section id="popular-items">
      <h2>Popular Right Now</h2>

      {/* Add Item Button */}
      <button className="add-item-btn" onClick={() => setShowAddForm(true)}>
        + Add New Item
      </button>

      {/* Items Grid */}
      <div className="popular-grid">
        {items.map((item) => (
          <article key={item._id} className="pop-card">
            <img
              src={`https://pixelport-server.onrender.com/images/${item.img}`}
              alt={item.name}
              onClick={() => setSelectedItem(item)}
            />
            <h3>{item.name}</h3>

            <div className="admin-buttons">
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </article>
        ))}
      </div>

      {/* Item Popup */}
      <ItemPopup item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Add Item Popup */}
      {showAddForm && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Add New Item</h2>

            <form onSubmit={handleAddItem} encType="multipart/form-data">
              <input type="file" name="img" accept="image/*" required />
              <input type="text" name="name" placeholder="Item Name" required />
              <input type="text" name="price" placeholder="Price" required />
              <input type="text" name="rating" placeholder="Rating" required />
              <textarea
                name="description"
                placeholder="Description"
                required
              ></textarea>

              <button type="submit">Add Item</button>
              <button type="button" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularItems;
