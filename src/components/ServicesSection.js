import React from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";
import '../css/ServicesSection.css';

const ServicesSection = () => {
    return (
        <div className="section services-section">
            <Text classes="medium bold section-topic" text="We offer high demand services" />
            <div className="service-cards-container">
                <ServiceCard 
                    iconName="fas fa-pencil-alt"
                    iconBgColor="bg-blue"
                    topic="UI/UX Design"
                    text="Lorem ipsum drum porttitor lacus. Pellentesq tempor dut, eros diam mattis risus, vehicula ornare massa."
                />
                <ServiceCard 
                    iconName="fas fa-code"
                    iconBgColor="bg-green"
                    topic="Front End"
                    text="Lorem ipsum drum porttitor lacus. Pellentesq tempor dut, eros diam mattis risus, vehicula ornare massa."
                />
                <ServiceCard 
                    iconName="fas fa-server"
                    iconBgColor="bg-red"
                    topic="Back End"
                    text="Lorem ipsum drum porttitor lacus. Pellentesq tempor dut, eros diam mattis risus, vehicula ornare massa."
                />
            </div>
        </div>
    );
}

export default ServicesSection;