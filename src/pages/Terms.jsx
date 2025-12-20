import "../styles/terms.css";

export default function Terms() {
    return (
        <div className="terms-container">
            {/* Background Effects */}
            <div className="terms-background">
                <div className="terms-orb terms-orb-1"></div>
                <div className="terms-orb terms-orb-2"></div>
            </div>

            {/* Content */}
            <div className="terms-card">
                <h1 className="terms-title">Terms & Conditions</h1>
                <p className="terms-subtitle">Emergency Response & Safety System</p>

                <div className="terms-section">
                    <p>
                        This Portal is designed, developed and hosted by Dial - 112, Telangana

                        <p>Though all efforts have been made to ensure the accuracy and currency of the content on this Portal, the same should not be construed as a statement of law or used for any legal purposes. Telangana Dial-112 accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise, of the contents. Users are advised to verify/check any information with the relevant Government department(s) and/or other source(s), and to obtain any appropriate professional advice before acting on the information provided in the Portal. </p>

                        <p>In no event will the Government or Telangana Dial-112 be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this Portal</p>

                        <p>Links to other websites that have been included on this Portal are provided for public convenience only. Telangana Dial-112 is not responsible for the contents or reliability of linked websites and does not necessarily endorse the view expressed within them. We cannot guarantee the availability of such linked pages at all times</p>
                        These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India

                    </p>
                </div>




                <div className="terms-footer">
                    © {new Date().getFullYear()} ERSS. All rights reserved.
                </div>
            </div>
        </div>
    );
}

