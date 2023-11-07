import Banner from "./Components/Banner";
import WhoAreWe from "./Components/CardsSection/WhoAreWe";
import FeatureBooks from "./Components/FeatureBooks";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";


const Home = () => {
    return (
        <div>           
            <Banner></Banner>
            <FeatureSection></FeatureSection>
            <FeatureBooks></FeatureBooks>
            <WhoAreWe></WhoAreWe>
            <Footer></Footer>
        </div>
    );
};

export default Home;