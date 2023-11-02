import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import StateCard from "../Components/StateCard";
import hcard1 from "../Assets/hcard1.avif";
import hcard2 from "../Assets/hcard2.jpg";
import hcard3 from "../Assets/hcard3.jpg";
import hcard4 from "../Assets/hcard4.webp"
import hcard5 from "../Assets/hcard5.webp";
import hcard6 from "../Assets/hcard6.webp";
import hcard7 from "../Assets/hcard7.webp";
import hcard8 from "../Assets/hcard8.jpg";

import india from "../Assets/india.avif"


function States() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg={india}
                title="Explore India"
                btnclass="hide" />
            <h1 className="indtxt">Indian States</h1>
            <StateCard
                titles="Madhya Pradesh"
                imageurl={hcard1}
                datas="Welcome To The Madhya Pradesh"
                urls="/mppage"
                btntext="Visit Madhya pradesh" />

            <StateCard
                titles="Maharashtra"
                imageurl={hcard2}
                datas="Welcome To The Maharashtra"
                urls="/mhpage"
                btntext="Visit Mahrashtra" />

            <StateCard
                titles="Chattisgarh"
                imageurl={hcard3}
                datas="Welcome To The Chhatisgarh"
                urls="/chpage"
                btntext="Visit Chattisgarh" />

            <StateCard
                titles="Uttar Pradesh"
                imageurl={hcard4}
                datas="Welcome To The Uttar Pradesh"
                urls="/uppage"
                btntext="Visit Uttar Pradesh" />

            <StateCard
                titles="Uttrakhand"
                imageurl={hcard5}
                datas="Welcome To The Uttrakhand"
                urls="/utpage"
                btntext="Visit Uttrakhand" />

            <StateCard
                titles="Rajasthan"
                imageurl={hcard6}
                datas="Welcome To The Rajasthan"
                urls="/rjpage"
                btntext="Visit Rajasthan" />

            <StateCard
                titles="Punjab"
                imageurl={hcard7}
                datas="Welcome To The Punjab"
                urls="/punpage"
                btntext="Visit Punjab" />

            <StateCard
                titles="Assam"
                imageurl={hcard8}
                datas="Welcome To The Assam"
                urls="/asmpage"
                btntext="Visit Assam" />
            <Footer />
        </>
    )
}

export default States;