import "./../css/Contact.css";
import "./../components/Navigation"
import ContactMain from "../components/ContactMain";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";
import FeedbackBoard from "../components/FeedbackBoard";



const Contact = () =>
{
    return (
        <div id="contact">
            <ContactMain />
            <ContactInfo />
            <ContactForm />
            <ContactFooter />
            <FeedbackBoard />
        </div>
    );
};

export default Contact;
