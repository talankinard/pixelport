import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/FeedbackBoard.css";

const FeedbackBoard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [editing, setEditing] = useState(null);
  const [status, setStatus] = useState("");

 useEffect(() => {
  axios
    .get("https://pixelport-server.onrender.com/api/feedback")
    .then((res) => {
      if (res.data.length === 0) {
        setStatus("No feedback yet — be the first to post!");
      } else {
        setStatus("");
      }
      setFeedbacks(res.data);
    })
    .catch(() => setStatus("Could not connect to feedback server"));
}, []);

  // Add or edit submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.feedback.length < 10) {
      setStatus("Feedback must be at least 10 characters long.");
      return;
    }

    try {
      if (editing) {
        // Update feedback (PUT)
        const res = await axios.put(
          `https://pixelport-server.onrender.com/api/feedback/${editing.id}`,
          formData
        );
        setFeedbacks((prev) =>
          prev.map((f) => (f.id === editing.id ? res.data.data : f))
        );
        setEditing(null);
        setStatus("Feedback updated!");
      } else {
        // Add new feedback (POST)
        const res = await axios.post(
          "https://pixelport-server.onrender.com/api/feedback",
          formData
        );
        setFeedbacks((prev) => [...prev, res.data.data]);
        setStatus("Feedback added!");
      }
      setFormData({ name: "", feedback: "" });
    } catch (err) {
      setStatus("Error" + (err.response?.data?.error || "Submitting feedback"));
    }
  };

  // Handle delete feedback
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://pixelport-server.onrender.com/api/feedback/${id}`);
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
      setStatus("Feedback deleted!");
    } catch {
      setStatus(" Error deleting feedback.");
    }
  };

  // Handle edit button click
  const handleEdit = (item) => {
    setEditing(item);
    setFormData({ name: item.name, feedback: item.feedback });
  };

  return (
    <section className="feedback-board">
      <h2>User Feedback Board</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <textarea
          name="feedback"
          placeholder="Your feedback..."
          value={formData.feedback}
          required
          onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
        />
        <button type="submit">
          {editing ? "Update Feedback" : "Add Feedback"}
        </button>
      </form>

      <p className="status">{status}</p>

      <div className="feedback-list">
        {feedbacks.map((f) => (
          <div key={f.id} className="feedback-card">
            <h4>{f.name}</h4>
            <p>{f.feedback}</p>
            <div className="feedback-buttons">
              <button onClick={() => handleEdit(f)}>Edit</button>
              <button onClick={() => handleDelete(f.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackBoard;
