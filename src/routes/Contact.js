import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"

function Contact() {
    return (
        <>
            <Navbar />
            {/* <Banner
                Cname="Banner-mid"
                Bannerimg="https://us.123rf.com/450wm/christianchan/christianchan1906/christianchan190601499/124449805-contact-methods-close-up-of-a-phone-email-chat-and-post-icons-wooden-block.jpg?ver=6z"
                title="Contact Us"
                btnclass="hide" /> */}
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;