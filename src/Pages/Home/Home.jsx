import Banner from "./Components/Banner";
import BannerSec from "./Components/BannerSec";
import GetInTouch from "./Components/CardsSection/GetInTouch";
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
            <BannerSec></BannerSec>
            <WhoAreWe></WhoAreWe>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </div>
    );
};

export default Home;