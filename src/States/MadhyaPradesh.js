import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban1 from "../Assets/ban1.avif";
import cul1 from "../Assets/cul1.jpg";
import cul2 from "../Assets/cul2.jpg";
import cul3 from "../Assets/cul3.jpg";
import cul4 from "../Assets/cul4.jpg";
import cul5 from "../Assets/cul5.jpg";
import cul6 from "../Assets/cul6.jpg";
import cul7 from "../Assets/cul7.webp";
import cul8 from "../Assets/cul8.jpg";
import cul9 from "../Assets/cul9.webp";
import cul10 from "../Assets/cul10.jpg";
function MadhyaPradesh() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban1}
                title="Explore Madhya Pradesh"
                btnclass="hide" />
            <StatesData
                deta="Madhya Pradesh, located in central India, is a state renowned for its rich cultural heritage, diverse landscapes, and historical significance. From the ancient temples of Khajuraho to the lush national parks like Kanha and Bandhavgarh, Madhya Pradesh offers a captivating blend of history and natural beauty. The state's vibrant festivals, traditional art forms, and spiritual centers, including Ujjain and Omkareshwar, contribute to its cultural tapestry. Known as the &quot; Heart of India,&quot; Madhya Pradesh beckons with its warm hospitality, flavorful cuisine, and a harmonious synthesis of tradition and modernity"
                capital="Captial: Bhopal"
                largest="Larget City: Indore" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Art"
                text="The exquisite artistry of Madhya Pradesh, emanating from the very heart of the nation, resonates globally. This inherent creative prowess gives rise to a diverse array of handicrafts, including woven silk and cotton sarees, block-printed fabrics, stuffed toys, bamboo and cane work, woodcraft, metal craft, and the distinctive Gond paintings. Notably, the region is celebrated for its traditional carpets in Gwalior and a myriad of art forms like stone craft, terra cotta, zari work, folk paintings, and papier-mâché, showcasing a rich cultural tapestry."
                img1={cul1}
                img2={cul2} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Food"
                text="
                Madhya Pradesh's culinary tapestry is a flavorful blend of street food and royal cuisine. Indore, the &quot;Street Food Capital,&quot;offers iconic dishes like poha and jalebi, while Gwalior boasts rich and royal flavors in its kebabs and biryanis. The state's food, rooted in local ingredients and spices, presents a delectable journey through tradition and innovation."
                img1={cul3}
                img2={cul4} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Dance"
                text="Madhya Pradesh's folk dances, characterized by vibrant colors and unique attire, offer a cultural spectacle. Dances like Gaur, Muria, Sugga, and Karma hold special significance, each with its distinctive style and symbolism. The Gaur Dance, portraying the spirit of tribal hunting, mimics the Bison's movements, while Saila involves stick dancing in Sarguja, Baitul, and Chhindwara. Sugga dance, imitating parrots, showcases rhythmic footwork, head movements, and the use of wooden clappers. The ancient Karma dance, with variants like Jhumar and Ghatwar, unfolds during the festival of Karma in August, reflecting the rich traditions of Madhya Pradesh's Adivasi communities."
                img1={cul5}
                img2={cul6} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Architecture"
                text="Madhya Pradesh, a cradle of diverse religions and historical epochs, unfolds its rich tapestry through myriad monuments. From the intricate Nagara Architecture of Khajuraho Temples, a UNESCO World Heritage site, to the profound Sanchi Stupa, commissioned by King Ashoka to preserve Buddha's teachings, the state's landmarks embody centuries of cultural amalgamation. Jahaz Mahal, a floating palace surrounded by water, stands as a testament to the architectural finesse of the 15th century, while the Jai Vilas Palace showcases a fusion of British-Italian design. Hoshang Shah's Tomb, an early marvel in marble architecture, adds to the architectural splendor of this historically enriched land."
                img1={cul7}
                img2={cul8} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Tribes"
                text="Madhya Pradesh is home to several nomadic tribes, including Gonds, Kols, Bhills, Murias, Baigas, Korkus, Kamaras, Marias, and Oraons. The Gond tribe, in particular, remains largely untouched, preserving their unique rituals, folklore, and legends. Each tribe contributes to the cultural mosaic with distinctive music, dance, jewelry, and dwellings. Experience their vibrant way of life by attending tribal fairs in Jabua and Bastar, where the native charm is truly transformative. These fairs also offer an opportunity to purchase crafts directly crafted by tribal hands, available at weekly markets and haats, providing a meaningful totem of remembrance."
                img1={cul9}
                img2={cul10} />
            <hr />
            <Footer />
        </>
    )
}

export default MadhyaPradesh;