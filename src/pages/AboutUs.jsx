// AboutUs.jsx
import React from "react";
import "../styles/aboutus.css";

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* Background floating orbs */}
            <div className="about-background">
                <div className="about-orb about-orb-1"></div>
                <div className="about-orb about-orb-2"></div>
            </div>

            {/* Main content card */}
            <div className="about-card">
                {/* Page title */}
                <h1 className="about-title">About Us</h1>

                {/* Section 1: Mission */}
                <div className="about-section">
                    <p style={{ textIndent: '80px' }} > Since the formation of the Telangana State in 2014, Telangana Police has established itself as one of India’s most technologically advanced police forces, consistently leveraging m-Governance, Artificial Intelligence (AI), Geographic Information Systems (GIS), and fully digitized investigation and evidence management systems to deliver efficient, citizen-centric policing.</p>
                </div>

                {/* Section 2: What We Do */}
                <div className="about-section">
                    <p style={{ textIndent: '80px' }}>
                        These pioneering efforts have earned national and international recognition, including the <b>Digital Engineering Award (Dallas, USA | 2024–2025)</b> for AI- and GIS-enabled Ganesh idol immersion management, the <b>National Digital Transformation Award (2024)</b> for the ePetty Case System, and the Ministry of External Affairs’ <b>Best Digital Platform Award (2025)</b> for the<b> VeriFast</b> passport verification system. Earlier achievements include the <b>National e-Governance Gold Award (2017)</b> and the <b>International mBillionth Award (2016)</b> for the HawkEye App, <b>multiple SKOCH Awards (2019)</b> for initiatives in road safety, women safety, CCTV surveillance, and emergency response systems, as well as CSI Nihilent Awards for Cycaps crime analytics and HawkEye.
                        Flagship digital initiatives such as HawkEye, VeriFast, the ePetty Case System, and the Integrated Command & Control Center (ICCC) have significantly strengthened citizen services, operational effectiveness, and data-driven decision-making. Collectively, these initiatives position Telangana Police as a national leader and global benchmark in technology-enabled, smart, and responsive law enforcement.</p>

                </div>

                {/* Section 3: Our Values */}
                <div className="about-section">


                    <p style={{ textIndent: '80px' }}>
                        In continuation of these technological advancements, Dial 112 also emphasizes the adoption of advanced solutions such as a single number for all emergencies, geo-location technology, multi-language support, artificial intelligence, drone patrolling and surveillance, an advanced location tracking system, and advanced IVR filtering. These initiatives enable Dial 112 to serve the people of Telangana with an efficient, effective, and technology-driven emergency response mechanism, ensuring robust law and order and enhanced public safety.
                    </p>
                </div>

                {/* Footer */}

            </div>
        </div >
    );
};

export default AboutUs;
