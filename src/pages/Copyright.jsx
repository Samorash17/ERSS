import "../styles/copyright.css";

const Copyright = () => {
    return (
        <div className="copyright-container">
            {/* Background Effects */}
            <div className="copyright-background">
                <div className="copyright-orb copyright-orb-1"></div>
                <div className="copyright-orb copyright-orb-2"></div>
            </div>

            {/* Main Card */}
            <div className="copyright-card">
                <h1 className="copyright-title">Copyright Notice</h1>
                <p className="copyright-subtitle">
                    Emergency Response & Safety System (ERSS)
                </p>

                <div className="copyright-section">
                    <p>
                        Material featured on this Portal may be reproduced free of charge after taking proper permission by sending a mail to us. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorisation to reproduce such material must be obtained from the departments/copyright holders concerned.
                    </p>
                </div>

                <div className="copyright-footer">
                    © {new Date().getFullYear()} Telangana Police. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Copyright;
