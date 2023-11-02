import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban6 from "../Assets/ban6.jpg";
import cul51 from "../Assets/cul51.jpg";
import cul52 from "../Assets/cul52.jpg";
import cul53 from "../Assets/cul43.jpg"
import cul54 from "../Assets/cul54.jpg";
import cul55 from "../Assets/cul55.jpg";
import cul56 from "../Assets/cul56.jpg";
import cul57 from "../Assets/cul57.avif";
import cul58 from "../Assets/cul58.jpg";
import cul59 from "../Assets/cul59.jpg";
import cul60 from "../Assets/cul60.jpg";


function Rajasthan() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban6}
                title="Explore Rajasthan"
                btnclass="hide" />
            <StatesData
                deta="Rajasthan, located in northwest India, is a land of vibrant colors, majestic forts, and desert landscapes. Known for its rich cultural heritage, the state is adorned with architectural marvels such as the palaces of Jaipur, the lakes of Udaipur, and the sand dunes of Jaisalmer. Rajasthan's traditional music, dance, and festivals, along with its delicious cuisine, add to the tapestry of this enchanting region. With a history steeped in royalty and valor, Rajasthan invites visitors to experience the grandeur of its past and the warmth of its hospitality."
                capital="Captial: Jaipur"
                largest="Larget City: Jaipur" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Attithi Devo Bhavo"
                text="The essence of Rajasthani culture is epitomized by the principle of 'Atithi Devo Bhavo,' translating to treating guests as manifestations of God. This cultural tenet is deeply ingrained in the people of Rajasthan, a state where hospitality is not just a tradition but a way of life. Given the significant presence of tourism-related occupations, the locals diligently uphold this principle, recognizing the importance of visitors to their economy. The resonance of this hospitality is captured in the popular folk song 'Padharo Mhare Desh,' a warm invitation that reflects Rajasthan's global renown for its exceptional and welcoming hospitality."
                img1={cul51}
                img2={cul52} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Dance And Music"
                text="
                Rajasthan's rich tapestry of folk culture is a testament to its diverse history under various rulers. Each region bears the imprint of unique folk music and dance styles, harmonizing through geographical proximity yet distinguished by individual nuances. Noteworthy groups like Manganiyars and Langas have left an indelible mark on Rajasthan's folk music landscape, performing traditional 'ragas' with specific purposes, such as invoking rains during pre-monsoon seasons. Other vibrant communities like Banjaras, Mirasis, and Jogis have also contributed to this cultural mosaic. Traditional instruments like sarangi, kamayach, dhols, shenhai, and been accompany these folk performances, often narrating tales of bravery or romance through ballads. The diverse dances, such as chang, ghoomer, bhopa, tejali, and kathipuli, served as both entertainment for the people and a spectacle for the royalty. Of particular note is the internationally acclaimed Ghoomer dance, originating in Udaipur, showcasing Rajasthan's rich cultural heritage."
                img1={cul53}
                img2={cul54} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Food"
                text="Embark on a culinary adventure in Rajasthan, where the vibrant and aromatic cuisine is a treat for the senses. A must-try is dalbati, a delightful combination of dal and wheat flour kneaded with yoghurt, generously adorned with ghee. Indulge in the diverse world of kachoris, with the spicy pyaaz (onion) kachori and the sweet mawa kachori tempting your taste buds at every corner. For those with a sweet tooth, the delectable ghewar and gheriya from Mewar offer a perfect finale to your Rajasthani gastronomic journey. Rich in ghee, Rajasthani cuisine caters to over 70% lacto-vegetarians, showcasing the state's prominence as one of India's most vegetarian-friendly destinations. Don't miss out on the non-vegetarian delights like Lal Maas and Mohan Maas, adding a flavorful twist to the culinary landscape."
                img1={cul55}
                img2={cul56} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Architecture"
                text="Rajasthan, a treasure trove of architectural marvels, invites enthusiasts to explore its diverse styles ranging from Islamic and Hindu to colonial and modern influences. The 15th-century Jain temple in Ranakpur showcases the M'ru-Gurjara Architecture with intricate domes and pillar carvings. Umaid Bhavan Palace in Jodhpur, a blend of Beaux-Arts and eastern-western styles, stands as a testament to Maharaja Jai Singh II's vision. Jaisalmer Fort, dating back to 1156 AD, captivates with its gates, Jain temples, and Havelis, earning UNESCO World Heritage status. Rajasthan's architectural splendors also extend to memorials, forts, heritage hotels, culminating in Jaipur's Pink City receiving UNESCO recognition in 2019."
                img1={cul57}
                img2={cul58} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Dresses In Rajasthan"
                text="In Rajasthan, traditional attire reflects the rich cultural heritage and distinctive styles of the region. Women elegantly drape sarees complemented by the 'odhni' covering their heads, symbolizing reverence. Men opt for dhotis paired with kurtas, adorned with a traditional headgear known as pagri or safah. The clothing features intricate designs, showcasing either intricate embroidery or charming dots. Cotton and silk are predominant fabrics, with women often donning silk attire, adding a touch of grace to the vibrant cultural tapestry of Rajasthan."
                img1={cul59}
                img2={cul60} />
            <hr />
            <Footer />
        </>
    )
}

export default Rajasthan;