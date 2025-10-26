import "./../css/Contact.css";
import "./../components/Navigation"
import ContactMain from "../components/ContactMain";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactFooter from "../components/ContactFooter";



const Contact = () =>
{
    return (
        <div id="contact">
            <ContactMain />
            <ContactInfo />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;
