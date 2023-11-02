import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban5 from "../Assets/ban5.jpg";
import cul41 from "../Assets/cul41.jpg";
import cul42 from "../Assets/cul42.jpg";
import cul43 from "../Assets/cul43.jpg"
import cul44 from "../Assets/cul44.avif";
import cul45 from "../Assets/cul45.jpg";
import cul46 from "../Assets/cul46.jpg";
import cul47 from "../Assets/cul47.png";
import cul48 from "../Assets/cul48.jpg";
import cul49 from "../Assets/cul49.jpg";
import cul50 from "../Assets/cul50.png";

function Uttrakhand() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban5}
                title="Explore Uttrakhand"
                btnclass="hide" />
            <StatesData
                deta="Uttarakhand, nestled in the lap of the Himalayas, is a picturesque state in northern India, known for its breathtaking landscapes and spiritual significance. Comprising the regions of Garhwal and Kumaon, the state is adorned with sacred rivers, lush forests, and snow-capped peaks. It houses revered pilgrimage sites like Badrinath and Kedarnath, attracting devotees and nature enthusiasts alike. Uttarakhand's cultural diversity is reflected in its festivals, traditional dances, and delectable cuisine, making it a captivating blend of spirituality and natural beauty."
                capital="Captial: Dehradun"
                largest="Larget City: Haridwar" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Dance And Music"
                text="In Uttarakhand, music and dance are integral to the cultural fabric, embodying rich traditions. Folk dances like Barada Nati from the Jaunsar Bhawar region, the acrobatic Langvir Nritya performed by men, and Pandav Nritya narrating Mahabharatha through music and dance, showcase the diversity of their performing arts. Among the folk songs, Basanti welcomes spring, Mangal accompanies marriage ceremonies, Jagars is used in ghost worship, Bajuband narrates the love and sacrifice of shepherds, Khuded reflects the suffering of separated women, and Chhura shares the experiences and advice of shepherds to the younger generation. This vibrant tapestry of music and dance encapsulates the cultural richness of Uttarakhand."
                img1={cul41}
                img2={cul42} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Festivals"
                text="
                Uttarakhand hosts a myriad of vibrant festivals, showcasing its cultural diversity. The Kumaoni Holi, celebrated in forms like Baithki Holi, Khari Holi, and Mahila Holi, is distinguished by its musical fervor. Harela marks the onset of the monsoon, with agricultural rituals in the month of Shravana, while Bhitauli, in Chaitra, centers around women sowing and reaping the harvest known as harela. The Jageshwar fair, observed at the Lord Shiva temple, involves a dip in the Brahma Kund during the Baisakh month. The grand Kumbh Mela, occurring once every four years in Allahabad, Haridwar, Ujjain, or Nasik, unfolds over three months, making it a colossal and revered festival in Uttarakhand."
                img1={cul43}
                img2={cul44} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Food"
                text="Uttarakhand's culinary landscape, shaped by Garhwali and Kumaoni cuisines, offers a delightful array of simple and locally sourced dishes, highlighting the region's culinary authenticity. Renowned for slow-cooked lentil-based delicacies, the cuisine features mouth-watering specialties like Urad Dal ke Pakode, spicy pakoras crafted from various pulses, and Phanu, a delectable dish made from assorted dals. Jhangore ki Kheer, a sweet treat featuring Jhangora, and Chainsoo, prepared from black gram dal, add to the gastronomic diversity. Bhang ki Chutney, a sour delight made from roasted bhang, cumin seeds, and lemon juice, encapsulates the unique flavors of Uttarakhand's traditional cuisine."
                img1={cul45}
                img2={cul46} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Garhwali Culture"
                text="In Uttarakhand, Garhwali stands as the primary language, with several dialects such as Jaunsari, Marchi, Jadhi, and Sailani enriching the linguistic diversity. The Garhwal region is home to a mosaic of ethnic groups and castes, including the Aryan-origin Rajputs and Brahmins who migrated over time. The northern tracts are inhabited by various tribal communities like Jaunsaris, Jadhs, Marchas, and Van Gujars, contributing to the cultural tapestry of Garhwal with their unique traditions and heritage."
                img1={cul47}
                img2={cul48} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Kumaoni Culture"
                text="Kumaon, renowned for its linguistic diversity, boasts 13 dialects, including Kumaiya, Gangola, Soryali, Sirali, Askoti, Danpuriya, Johari, Chaugarkhyali, Majh Kumaiya, Khasparjia, Pachhai, and Rauchaubhaisi, collectively known as the Central Pahari languages. The region is steeped in rich folk literature, narrating tales of myths, heroes, heroines, bravery, and characters from epics like Ramayana and Mahabharatha. The traditional dance form of Chhalaria, deeply rooted in martial traditions, takes center stage, reflecting the cultural ethos of Kumaon. Festivals, celebrated with fervor, showcase these traditional dance forms, preserving the vibrant heritage of the region."
                img1={cul49}
                img2={cul50} />
            <hr />
            <Footer />
        </>
    )
}

export default Uttrakhand;