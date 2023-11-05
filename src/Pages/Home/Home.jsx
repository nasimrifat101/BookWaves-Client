import Navbar from "../Navbar/Navbar";
import Banner from "./Components/Banner";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeatureSection></FeatureSection>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;