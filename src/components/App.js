import React from "react";
import OpenSection from './OpenSection';
import ServicesSection from "./ServicesSection";
import DesginsSection from "./DesignsSection";
import OurTeamSection from './OurTeamSection';
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";
import '../css/App.css';

const links = ["Home", "Services", "Our Works", "Clients", "Contact"];
const reviews = [
    {
        reviewText: `"Fast and outstanding results. Edie understands their customer's needs. They have a young and talented team."`,
        userImg: require('../res/person4.png'),
        username: "Carlos Tran",
        userJob: "The Decorate Gatsby"
    }
]

const App = () => {
    return (
        <>
            <OpenSection links={links} />
            <ServicesSection />
            <DesginsSection />
            <OurTeamSection />
            <ReviewsSection reviews={reviews} />
            <Footer footerLinks={links} />
        </>
    );
}

export default App;