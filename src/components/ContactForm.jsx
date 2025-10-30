import React from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "75becda6-069b-4bbe-bd69-cfc4fd5cb56b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <section className="one">
      <form method="POST" id="contact-form" onSubmit={onSubmit}>
        <p className="other">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
        </p>

        <p className="other">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </p>

        <p className="message">
          <label htmlFor="message">Message:</label>
          <textarea name="message" required></textarea>
        </p>

        <button type="submit">Submit Form</button>
        <span>{result}</span>
      </form>
    </section>
  );
};

export default ContactForm;
