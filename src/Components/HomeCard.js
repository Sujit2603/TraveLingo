import "./HomeCardStyles.css"
import HomeCardData from "./HomeCardData";
import hcard1 from "../Assets/hcard1.avif"
import hcard2 from "../Assets/hcard2.jpg"
import hcard3 from "../Assets/hcard3.jpg"

function HomeCard() {
    return (
        <>
            <div className="state">
                <h1>Indian States</h1>
                <p>Some Indian States With There Brief Introduction</p>
                <div className="Mcard">
                    <HomeCardData
                        image={hcard1}
                        heading="Madhya Pradesh"
                        text="Madhya Pradesh, at India's heart, embodies a captivating mix of history, culture, and natural splendor. Branded as the &quot; Heart of India,&quot; it showcases ancient marvels like Khajuraho temples and Gwalior's medieval forts. With a diverse populace, including lively tribal communities, the state thrives on vibrant festivals, Gond painting, and exquisite handwoven textiles. Expansive national parks like Kanha and Bandhavgarh spotlight incredible biodiversity, enhancing the state's allure. Madhya Pradesh seamlessly blends heritage, spirituality, and natural wonders into a unique and enchanting tapestry." />
                    <HomeCardData
                        image={hcard2}
                        heading="Maharashtra"
                        text="Maharashtra, located in the western part of India, is a state of diverse landscapes, bustling cities, and rich cultural heritage. Home to India's financial capital, Mumbai, Maharashtra is a melting pot of tradition and modernity. The state boasts historical treasures such as the Ajanta and Ellora Caves, reflecting its ancient roots. Maharashtra is renowned for its vibrant festivals, including Ganesh Chaturthi, celebrated with grandeur. With a mix of coastal charm, bustling metropolises, and historical landmarks, Maharashtra stands as a dynamic emblem of India's cultural and economic vitality.." />
                    <HomeCardData
                        image={hcard3}
                        heading="Chattisgarh"
                        text="Chhattisgarh, situated in central India, is a state known for its lush greenery, tribal heritage, and cultural diversity. Formed in 2000, it emerged as a separate state from Madhya Pradesh. Chhattisgarh is characterized by its vibrant folk traditions, colorful festivals, and unique tribal art forms, such as Bastar's traditional handicrafts. The state's natural beauty is exemplified by dense forests, picturesque waterfalls, and the meandering course of the Mahanadi River, making Chhattisgarh a captivating blend of tradition and scenic charm." />
                </div>
            </div>

        </>
    )
}

export default HomeCard;