import Navbar from "../Components/Navbar"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer";
import TeamCard from "../Components/TeamCard";

function Team() {
    return (
        <>
            <Navbar />
            <Banner
                Cname="Banner-mid"
                Bannerimg="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Our Team"
                btnclass="hide" />
            <TeamCard />
            <Footer />

        </>
    )
}
export default Team;

