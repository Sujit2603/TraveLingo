import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban3 from "../Assets/ban3.jpeg";
import cul11 from "../Assets/cul11.jpg"
import cul12 from "../Assets/cul12.png"
import cul13 from "../Assets/cul13.jpg"
import cul14 from "../Assets/cul14.webp"
import cul15 from "../Assets/cul15.avif"
import cul16 from "../Assets/cul16.avif"
import cul17 from "../Assets/cul17.jpg"
import cul18 from "../Assets/cul18.jpg"
import cul19 from "../Assets/cul19.jpg"
import cul20 from "../Assets/cul20.webp"

function Mahrashtra() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban3}
                title="Explore Mahrashtra"
                btnclass="hide" />
            <StatesData
                deta="Maharashtra, a diverse and dynamic state in western India, is known for its bustling metropolis Mumbai, the economic powerhouse of the country. Home to a rich cultural heritage, Maharashtra boasts iconic landmarks such as the Gateway of India and the Ajanta and Ellora Caves. The state embraces a variety of landscapes, from the vibrant beaches of Goa to the lush hills of the Western Ghats. Maharashtra's culinary scene is celebrated for its mouthwatering street food, including the world-famous Vada Pav."
                capital="Captial: Mumbai"
                largest="Larget City: Mumbai" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Attire"
                text="The traditional attire of Maharashtra is steeped in cultural significance. For men, it typically includes a dhoti, kurta or cotton shirt, a distinctive headwear called pheta or topi, and an optional waistcoat or bandi. Women traditionally wear a choli or blouse paired with a 9-yard saree known as 'lugade' or 'nauwari saadi.' Footwear comprises open sandals or chappals. While contemporary fashion trends have introduced a shift toward western clothing, especially in the 21st century, the traditional attire remains cherished, often donned during religious events or Marathi festivals by those seeking to uphold cultural roots."
                img1={cul11}
                img2={cul12} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Food"
                text="
                Maharashtra's staple diet is a reflection of its agrarian roots, comprising wheat, rice, jowar, bajri, along with an abundance of vegetables, lentils, and fruits. Historically engaged in labor-intensive occupations like farming, the diet is carbohydrate-rich. While meat was less consumed until recent times, Maharashtra's cuisine is renowned for its diverse flavors ranging from sweet to mildly spicy and spicy. Globally acclaimed dishes like vada pav, pav bhaji, missal pav, and pooran poli have roots in Maharashtra, showcasing its culinary influence. Shrikhand, a popular sweet dish, is believed to have originated in this culturally rich state."
                img1={cul13}
                img2={cul14} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Architecture"
                text="Maharashtra is adorned with a diverse array of significant monuments, showcasing influences from various architectural styles. The Bibi ka Maqbara reflects Mughal architecture, reminiscent of the iconic Taj Mahal. In Mumbai, the Gateway of India and Chhatrapati Shivaji Terminus exemplify the Indo-Saracenic revival architecture influenced by the British. The state's rich cultural heritage is further exemplified by ancient temples, some over a millennium old, and renowned UNESCO World Heritage Sites like the rock-cut marvels of Ajanta and Ellora Caves, highlighting Maharashtra's historical and architectural splendor."
                img1={cul15}
                img2={cul16} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Tourism"
                text="Maharashtra stands as a premier tourist destination with iconic landmarks like the Gateway of India, Sea Link, Siddhivinayak, Chhatrapati Shivaji Terminus, and Marine Drive in Mumbai. The state's spiritual aura is evident at the Sai Baba Temple in Shirdi, Mahalaxmi Temple in Kolhapur, and Trimbakeshwar Shiva Temple in Nashik. With the scenic hill station of Mahabaleshwar, historical monuments in Aurangabad, and an array of captivating attractions, Maharashtra attracts visitors from across the globe. The thriving hotel industry further complements the tourism experience, making Maharashtra a diverse and compelling destination for travelers."
                img1={cul19}
                img2={cul20} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Festival"
                text="Maharashtra boasts a rich tapestry of festivals, with several, including Nag Panchami, Ganesh Chaturthi, Gokul Ashtami, Makar Sankranti, Gudi Padwa, Bhau Beej, Ellora Festival, Narali Pournima, and Shivaji Jayanti, originating within its cultural milieu. Nag Panchami venerates the Snake God, believed to dispel 'Nag Dosh,' while Ganesh Chaturthi unfolds as an eleven-day celebration dedicated to Lord Ganesh. Alongside these, Maharashtra embraces a diverse array of festivals, including Diwali, Christmas, Eid, and New Year's. Remarkably, people across the state, regardless of religion, joyously participate in major festivals, underscoring a spirit of unity and brotherhood among its vibrant communities."
                img1={cul17}
                img2={cul18} />
            <hr />
            <Footer />
        </>
    )
}

export default Mahrashtra;