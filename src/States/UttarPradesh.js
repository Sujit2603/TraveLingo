import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban4 from "../Assets/ban4.jpg";
import cul31 from "../Assets/cul31.jpg";
import cul32 from "../Assets/cul32.jpg";
import cul33 from "../Assets/cul33.avif"
import cul34 from "../Assets/cul34.jpg";
import cul35 from "../Assets/cul35.jpg";
import cul36 from "../Assets/cul36.jpg";
import cul37 from "../Assets/cul37.jpeg";
import cul38 from "../Assets/cul38.jpg";
import cul39 from "../Assets/cul39.avif";
import cul40 from "../Assets/cul40.jpg";

function UttarPradesh() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban4}
                title="Explore Uttar Pradesh"
                btnclass="hide" />
            <StatesData
                deta="Uttar Pradesh, India's most populous state, is a cultural and historical treasure trove. Home to the iconic Taj Mahal in Agra, the state boasts a wealth of architectural marvels like the Varanasi ghats and Lucknow's Bara Imambara. Rich in heritage, Uttar Pradesh is a melting pot of diverse traditions, religious pilgrimage sites, and vibrant festivals, making it a significant cultural hub. From the sacred city of Varanasi on the banks of the Ganges to the royal grandeur of Lucknow, Uttar Pradesh captivates with its blend of history, spirituality, and cultural richness."
                capital="Captial: Lucknow"
                largest="Larget City: Kanpur" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Kumbh Mela"
                text="Allahabad, one of the holiest cities in India, pulsates with spiritual fervor during the celebrated Kumbh Mela, Magh Mela, and Ardha Mela. These festivals, marked by vibrant and psychedelic cultural expressions, draw devotees from across the globe to the sacred confluence of rivers. The city becomes a melting pot of faith during these auspicious melas, with grand festivities and religious rituals performed with grandeur, creating a unique and spiritually charged atmosphere for practitioners of Hinduism."
                img1={cul31}
                img2={cul32} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Home Town Of Shree krishna"
                text="
                Mathura, revered as the land of Lord Krishna, is a city steeped in holy festivities. Celebrations such as Krishna Janmashtami, Radha Ashtami, and Govardhan Puja resonate with ardor and zest, drawing Krishna devotees from far and wide. The city, along with nearby Vrindavan, becomes a pilgrimage hub where devotees partake in early morning dips, witness sacred aartis, and engage in evening pujas. These rituals not only hold deep religious significance but also offer a captivating and spiritually enriching spectacle in the heart of Lord Krishna's abode."
                img1={cul33}
                img2={cul34} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Custom And Traditions"
                text="Uttar Pradesh's rich cultural tapestry is woven with numerous traditions and customs, deeply rooted in Hindu culture. The auspicious act of taking a dip in the holy waters, believed to cleanse sins, is a revered practice. The state boasts significant ghats, including the renowned Sangam in Allahabad, where the confluence of the Ganga, Yamuna, and Saraswati rivers holds spiritual significance, believed to break the cycle of rebirth. Varanasi's ghats, another focal point, witness devotees engaging in the sacred ritual of aarti, a prolonged pooja involving fire and yajna, aimed at dispelling evils. These rituals are considered essential, bringing good luck and prosperity, making them integral to the lives of the people of Uttar Pradesh."
                img1={cul35}
                img2={cul36} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Folk Culture"
                text="Uttar Pradesh's cultural canvas is a vibrant mosaic of diverse folk art and dance forms, offering a rich selection for enthusiasts. The iconic Raslila takes center stage, a captivating performance inspired by Lord Krishna's playful acts with milkmaids. The state's folk tradition encompasses a spectrum of classical music, dance, and drama, with Ramlila standing out as a renowned art form narrating Lord Rama's life. Khayal, a semi-classical singing style originating from Awadh's royal courts, adds melodic grace, while Svanga brings to life semi-historical tales and ballads through the captivating medium of dance drama, showcasing the multifaceted cultural heritage of Uttar Pradesh."
                img1={cul37}
                img2={cul38} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Food"
                text="Uttar Pradesh's culinary heritage is a delectable fusion, prominently featuring Awadhi and Mughal cuisines, celebrated in Lucknow. Reflecting the culinary legacy of the ruling Mughals, signature dishes like dum biryani, dum Gosht, and slow-cooked overnight Nihari entice the palate. In the northern region, encompassing cities like Meerut and Mathura, the culinary landscape is adorned with staples like kachori, Aloo curry, and the traditional trio of dal, roti, and rice. Agra's Petha stands out as a famous sweet delicacy, while refreshing beverages such as lassi, chaas, and roohafza complement the diverse and flavorful gastronomy of Uttar Pradesh."
                img1={cul39}
                img2={cul40} />
            <hr />
            <Footer />
        </>
    )
}

export default UttarPradesh;