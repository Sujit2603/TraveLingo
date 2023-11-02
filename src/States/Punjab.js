import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StatesData from "../Components/StatesData";
import DestinationData from "../Components/DestinationData";
import ban7 from "../Assets/ban7.webp";
import cul61 from "../Assets/cul61.jpg";
import cul62 from "../Assets/cul62.avif";
import cul63 from "../Assets/cul63.webp"
import cul64 from "../Assets/cul64.jpg";
import cul65 from "../Assets/cul65.webp";
import cul66 from "../Assets/cul66.jpg";
import cul67 from "../Assets/cul67.jpg";
import cul68 from "../Assets/cul68.webp";
import cul69 from "../Assets/cul69.jpg";
import cul70 from "../Assets/cul70.webp";

function Punjab() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={ban7}
                title="Explore Punjab"
                btnclass="hide" />
            <StatesData
                deta="Punjab, known as the &quot; Land of Five Rivers,&quot; is a vibrant state in northern India with a rich cultural and agricultural legacy. Famous for its warm hospitality, Punjabi culture is celebrated globally for its lively music, energetic dance forms like Bhangra, and delectable cuisine featuring iconic dishes such as Butter Chicken and Sarson da Saag. The state is steeped in history, witnessing the rise of Sikhism with significant religious sites like the Golden Temple in Amritsar. Punjab's fertile plains contribute significantly to India's agricultural prosperity, making it a vital region in the country."
                capital="Captial: Chandigarh"
                largest="Larget City: Ludhiana" />
            <hr />
            <DestinationData
                className="first-des"
                heading="Dresses In Punjab Culture"
                text="The traditional attire of Punjab is a vibrant display of colors and intricate designs. Women adorn Salwar Kameez, with the Salwar as the bottom wear and the Kameez as the upper garment, featuring beautiful embroidery in a variety of colors. Men take pride in wearing a Turban, a distinctive symbol often worn exclusively by Sikhs. The traditional male attire includes a Kurta for the upper body and Tehmat, loose and baggy Pyjamas, for the lower part. Jooti, a traditional footwear style, is commonly worn by both men and women in Punjab, adding to the cultural richness of the attire."
                img1={cul61}
                img2={cul62} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Dance And Music"
                text="
                Punjab boasts a rich cultural heritage with its vibrant folk music and dances that have gained popularity both locally and globally. Bhangra, rooted in the celebration of the harvest season by Punjabi farmers, has transcended borders and become a global phenomenon. Other traditional dances like Giddha, Sammi, Luddhi, and Dhamal add to the lively cultural tapestry. The energetic performances, often accompanied by drum beats and music, are a hallmark of the Baisakhi Festival. The attire for these celebrations typically includes Kurta and Tehmat, adorned with turbans and handkerchiefs, reflecting the cultural exuberance of Punjab."
                img1={cul63}
                img2={cul64} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Food"
                text="Punjabi cuisine, celebrated for its robust flavors and aromatic spices, is a favorite among Indians and beyond. The use of generous amounts of ghee in chapattis and hearty dishes makes it a culinary delight for those with a penchant for bold flavors. Lassi, a traditional Punjabi drink, serves as a refreshing welcome beverage, offering a rich blend of milk. Makke di Roti and Sarson da Saag, featuring maize bread and mustard leaf curry, exemplify the region's culinary heritage. From the iconic Tandoori Chicken to Chole Bhature, Rajma Chawal, and Paneer Naan, Punjabi food promises a gastronomic journey filled with indulgence."
                img1={cul65}
                img2={cul66} />
            <hr />
            <DestinationData
                className="first-des-reverse"
                heading="Language And Religions"
                text="Punjabi, the official language of the state, is spoken in various dialects across different regions, such as Doabi, Ghebi, Malwai, Pahari, Shahpuri, Rachnavi, and Hindko. The script for Punjabi differs in India (Gurmukhi) and Pakistan (Shahmukhi). Punjab is characterized by a diverse religious landscape, with Hindus, Sikhs, Muslims, Christians, and Jains coexisting. The state has a significant Sikh population, and religious centers like the iconic Golden Temple in Amritsar attract visitors from around the world. Khatris are prominent among Hindus, while Sikhs form a substantial part of the population due to the historical origins of Sikhism."
                img1={cul67}
                img2={cul68} />
            <hr />
            <DestinationData
                className="first-des"
                heading="Tourist Places"
                text="Punjab, the spiritual heartland of Sikhism, hosts the holiest Sikh shrine, the Sri Harmandir Sahib, also known as the Golden Temple, situated in Amritsar. Three of the five Takhts (Temporal Seats of religious authority) of Sikhism are located in Punjab: Sri Akal Takht Sahib, Damdama Sahib, and Anandpur Sahib. The state is renowned for its robust infrastructure, vibrant sports culture, and a thriving hosiery goods industry. Visitors can experience the warmth and hospitality of the locals while exploring attractions like the Jallianwala Bagh, Wagah Border, Maharaja Ranjit Singh Museum in Amritsar, and architectural wonders like Sheesh Mahal and Quila Muabrak in Patiala, along with the modern charm of Chandigarh with its Sikh Ajaibghar, Sukhna Lake, Rock Garden, and Rose Garden."
                img1={cul69}
                img2={cul70} />
            <hr />
            <Footer />
        </>
    )
}

export default Punjab;

