const ContactForm = () =>
{
    return (
        <section className="one">
            <form method="POST" id="contact-form">
                <p className="other">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required />
                </p>

                <p className="other">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" required />
                </p>

                <p className="message">
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" required></textarea>
                </p>

                <button type="submit">Submit Form</button>
            </form>
        </section>
    )
}

export default ContactForm
