import React from "react";
import "../css/ItemPopup.css";

const ItemPopup = ({ item, onClose }) => {
  if (!item) return null; // nothing to show

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <img
          src={`https://pixelport-server.onrender.com/images/${item.img}`}
          alt={item.name}
        />
        <h2>{item.name}</h2>
        <p className="price">{item.price}</p>
        <p className="rating">{item.rating}/5</p>
        <p className="desc">{item.description}</p>
        <details>
            <summary>Reviews ({item.reviews.length})</summary>
            <ul className="review-list">
                {item.reviews.map((review, index) => (
                <li key={index}>{review}</li>
                ))}
            </ul>
        </details>
      </div>
    </div>
  );
};

export default ItemPopup;
