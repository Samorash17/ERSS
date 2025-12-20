import "../styles/privacy.css";

const Privacy = () => {
    return (
        <div className="privacy-container">
            {/* Background Effects */}
            <div className="privacy-background">
                <div className="privacy-orb privacy-orb-1"></div>
                <div className="privacy-orb privacy-orb-2"></div>
            </div>

            {/* Main Card */}
            <div className="privacy-card">
                <h1 className="privacy-title">Privacy Policy</h1>
                <p className="privacy-subtitle">
                    Emergency Response & Safety System (ERSS)
                </p>

                <div className="privacy-section">
                    <p>
                        <p>  This portal does not automatically capture any specific personal information from you, (like name, phone number or e-mail address), that allows us to identify you individually</p>

                        <p>If this Portal requests you to provide personal information, you will be informed for the particular purposes for which the information is gathered and adequate security measures will be taken to protect your personal information.</p>

                        <p>We do not sell or share any personally identifiable information volunteered on this Portal site to any third party (public/private). Any information provided to this Portal will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction</p>

                        <p>We gather certain information about the User, such as Internet protocol (IP) addresses, domain name, browser type, operating system, the date and time of the visit and the pages visited. We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected.</p>
                    </p>
                </div>
                <div className="privacy-footer">
                    Last updated: January 2025
                </div>
            </div>
        </div>
    );
};

export default Privacy;
