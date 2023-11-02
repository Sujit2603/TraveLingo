import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import Destination from "../Components/Destination";
import Homeimg from "../Assets/Homeimg.avif";
import HomeCard from "../Components/HomeCard";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner"
                Bannerimg={Homeimg}
                // Bannerimg="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTJ2phm4NgUcUOPvmnCCnOlZrI9HDunHR3_LBIsKByld2GmxlW4zgC23r1A4ZpGDnet"
                title="Explore Dream Destination"
                text="Start Your Learning Journey With Us.."
                btnText="Explore India"
                url='/states'
                btnclass="show" />
            <Destination />
            <HomeCard />
            <Footer />
        </>
    )
}

export default Home;