import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban9 from "../Assets/ban9.avif";
import cul71 from "../Assets/cul71.webp";
import cul72 from "../Assets/cul72.avif";
import cul73 from "../Assets/cul73.jpg"
import cul74 from "../Assets/cul74.jpg";
import cul75 from "../Assets/cul75.jpg";
import cul76 from "../Assets/cul76.jpg";
import cul77 from "../Assets/cul77.jpg";
import cul78 from "../Assets/cul78.jpeg";
import cul79 from "../Assets/cul79.webp";
import cul80 from "../Assets/cul80.webp";

function Assam() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban9}
                title="Explore Assam"
                btnclass="hide" />
            <StatesData
                deta="Assam, nestled in the northeastern part of India, is a state of diverse cultures, landscapes, and rich biodiversity. Renowned for its tea plantations, the Brahmaputra River flows through its heart. The state is known for the unique one-horned rhinoceros in Kaziranga National Park, and the vibrant Bihu festival, celebrated with traditional dance and music, reflects the cultural vibrancy. Assam's cuisine, influenced by its geography, includes aromatic rice dishes, fish curries, and a variety of sweets. The state also boasts historical sites, such as the Kamakhya Temple and the Ahom architecture in Sivasagar."
                capital="Captial: Dispur"
                largest="Larget City: Guwahati" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Dresses In Assam"
                text="The traditional attire of Assam reflects simplicity and cultural significance. Women often wear the Mekhela Chador or Riha-Mekhela, adorned with motifs, while men opt for the 'suria' or 'dhoti' paired with a draped chadar called 'Seleng.' The Gamucha, a white rectangular cloth with a red border, holds cultural importance, used in various ceremonies for purification. It is worn by men as the dhoti-gamosa and is also part of the Bihu dance attire. Symbolic items like Tamul paan (betel leaves and areca nuts) and Xorai (a bell-shaped container) play roles in religious practices, representing devotion and container mediums."
                img1={cul71}
                img2={cul72} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Music"
                text="
                Assam boasts a rich heritage of folk music, deeply rooted in its historical influences from the Kamarupa Kingdom to the Ahom Dynasty. This cultural amalgamation has shaped indigenous folk music, leaving an enduring impact on renowned artists like Bhupen Hazarika, Parvati Prasad Baruva, Jayanta Hazarika, Utpalendu Choudhury, and Nirmalendu Choudhury. Classical Assamese music is characterized by Borgeet and Ojapali, where narrative singing intertwines with dancing, and Oja-pali features a traditional raga system. The music reflects the diverse cultural tapestry of Assam, preserving its unique musical traditions."
                img1={cul73}
                img2={cul74} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Festivals"
                text="Assam, a land steeped in vibrant traditions, celebrates numerous festivals, with Bihu standing out as the most significant. Bihu, a non-religious festival, marks key moments in a cultivator's annual cycle and is celebrated irrespective of caste and creed. Rongali Bihu, also known as Rangaali Bihu, ushers in mid-April with spring and the sowing season, filled with merry-making. Kangaali Bihu follows in mid-October, celebrating the harvest, and Magh Bihu, also called Bhogaali Bihu, graces mid-January with community feasts and bonfires. Additionally, Ali-Ai-Ligang, the spring festival, symbolizes the agricultural cycle, emphasizing root, fruit, and sowing."
                img1={cul75}
                img2={cul76} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Food"
                text="Assamese cuisine, known for its mild spices, revolves around a staple diet of rice complemented by a diverse array of non-vegetarian delights. Fish, chicken, duck, pigeon, and pork feature prominently, with fish curry, especially the sour dish Machor tenga, being a beloved favorite. Patot diya mas, a delicacy involving baked fish wrapped in leaves with white mustard paste, adds to the culinary richness. Traditional meat preparations include mutton, duck, pigeon, and fowl. Assam's rice varieties, such as Cheera, akhoi, muri, and more, showcase the region's agricultural diversity. Noteworthy detoxifying appetizers like Khar, made by burning the banana tree stem, contribute a unique flavor. Assamese sweets, an integral part of the cuisine, include pitha, with varieties like til pitha, ghila pitha, sunga pitha, narikolor laaru, and kol pitha, offering delightful sweetness to the gastronomic experience."
                img1={cul77}
                img2={cul78} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Major Occupation In Assam"
                text="Agriculture is the predominant occupation in Assam, engaging 63% of the state's workforce. The cultivation of rice, the staple diet, is a primary focus, alongside other crops like pulses, jute, and fruits. Assam's global recognition in the tea industry is reflected in its tea plantations, contributing 15% to the world's tea output and employing nearly a million people. Forests play a crucial role in the state's economy, with timber and bamboo being major products. Weaving, particularly by Assamese women, is a significant occupation, producing silk, tussar, and various fabrics. The wood products and food industries also contribute significantly to employment opportunities in Assam."
                img1={cul79}
                img2={cul80} />
            <hr />
            <Footer />
        </>
    )
}

export default Assam;