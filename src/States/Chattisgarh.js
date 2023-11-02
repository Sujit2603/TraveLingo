import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban3 from "../Assets/ban3.webp";
import cul21 from "../Assets/cul21.jpg";
import cul22 from "../Assets/cul22.avif";
import cul23 from "../Assets/cul23.jpg";
import cul24 from "../Assets/cul24.jpg";
import cul25 from "../Assets/cul25.jpg";
import cul26 from "../Assets/cul26.jpg";
import cul27 from "../Assets/cul27.jpg";
import cul28 from "../Assets/cul28.jpg";
import cul29 from "../Assets/cul29.jpg";
import cul30 from "../Assets/cul30.avif";

function Chattisgarh() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban3}
                title="Explore Chattisgarh"
                btnclass="hide" />
            <StatesData
                deta="Chhattisgarh, located in central India, is known for its rich cultural heritage, lush landscapes, and vibrant tribal communities. The state is characterized by dense forests, ancient temples, and traditional folk arts. With cities like Raipur as its capital, Chhattisgarh offers a blend of historical charm and natural beauty, making it a unique and compelling destination for travelers."
                capital="Capital: Raipur"
                largest="Larget City: Raipur" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Art And Craft"
                text="Chhattisgarh is renowned for its distinctive traditional arts and crafts, showcasing the skilled craftsmanship of local artisans. Reflecting the influence of tribal culture, the handicrafts include exquisite wood carvings, bell metal (Dhokra) artifacts, terracotta figurines, tribal jewelry, vibrant paintings, clay pieces, and intricately woven cotton fabrics. These creations not only exemplify artistic perfection but also celebrate the ingenious use of natural resources. From wrought iron work to bamboo craftsmanship, each piece tells a story, making these handicrafts an integral part of Chhattisgarh's rich cultural tapestry."
                img1={cul21}
                img2={cul22} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Food"
                text="
                Chhattisgarh's food culture is deeply rooted in its rich traditions, earning it the title of the &quot;rice bowl of Central India.&quot;The state's cuisine, influenced by tribal food culture, revolves around rice-based dishes like fara, cheela, and chousera roti, often paired with an array of green leafy vegetables. Bore Baasi, a simple yet staple summer meal, involves rice dipped in water, curd, or buttermilk, served with pickle and raw onion. A notable traditional dish is &quot;ddhar,&quot; featuring layers of grinded urad dal and kochai patta, steamed, cut, and cooked in a curd-based curry. Chhattisgarh's sweet delicacies, including gulgula, dhoodh fara, and tikhur barfi, showcase the state's love for sweet treats. The locals also savor the unique brew made from the small, creamy white fruit of the local Mahuwa tree."
                img1={cul23}
                img2={cul24} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Champara Mela"
                text="The Champaran Fair, an annual event occurring in January and February, unfolds about 10 km from Rajim in the state of Chhattisgarh. Exemplifying the rich and vibrant culture of the region, this fair holds special significance as the birthplace of Mahaprabhu Vallabhacharya. Drawing a large gathering of Vaishnavas from across the country, the event serves as a cultural and religious celebration, commemorating the revered figure's legacy in the heart of Chhattisgarh."
                img1={cul25}
                img2={cul26} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Bastar Lokotsav"
                text="Chhattisgarh comes alive with cultural vibrancy during the Bastar Lokotsav, a fortnight-long tourism event strategically aligned with the renowned Bastar Dassera festival. This annual celebration takes place post-monsoons, accentuating the breathtaking beauty of the tribal-dominated landscape, with lush forests and cascading waterfalls at their peak. The event not only offers a visual feast of natural splendor but also provides a unique opportunity for visitors to directly purchase tribal handicrafts from local artisans, immersing themselves in the rich cultural heritage of the region."
                img1={cul27}
                img2={cul28} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Chakradhar Samaroh"
                text="Chakradhar Samaroh, a celebrated music festival in Chhattisgarh, is organized by the Ustad Allaudin Khan Sangeet Academy and the Chakradhar Lalit Kala Kendra. Dedicated to the illustrious memory of Maharaja Chakradhar Singh, a former ruler renowned for his mastery of the tabla and dance, this cultural extravaganza honors his contributions to the arts. Maharaja Chakradhar Singh, a prolific author on music and dance, also pioneered a new form of Kathak and established the Raigarh Gharana. The Chakradhar Samaroh stands as one of Chhattisgarh's premier cultural festivals, distinguished for its exceptional music and dance performances that eloquently reflect the state's rich cultural heritage."
                img1={cul29}
                img2={cul30} />
            <hr />
            <Footer />
        </>
    )
}

export default Chattisgarh;