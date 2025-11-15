import React, {useState} from "react";
import axios from "axios";
import "../css/ContactForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");

      try {
        await axios.post("https://pixelport-server.onrender.com/api/contact", formData);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        setStatus("Error sending message. Please try again.");
      }
  };

  return (
    <section id="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required/>

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required/>

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here"required ></textarea>

        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default ContactForm;
