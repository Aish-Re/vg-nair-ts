function Footer(){
    return(
        <footer>

            <div className="footer-line"></div>

            <div className="footer-info">
                <div className="footer-address">
                    <h3>VG Nair</h3>
                    <div className="footer-address-line"></div>
                    <p>TC. 25/3119, Court View Nagar,<br/>Vanchiyoor, TVM,<br/>Kerala - 695035</p>
                </div>

                <div className="footer-firm">
                    <h3>FIRM</h3>
                    <p>Diversity Policy</p>
                    <p>Terms of Service</p>
                    <p>Legal Notice</p>
                </div>

                <div className="footer-practice">
                    <h3>PRACTICE</h3>
                    <p>Litigation</p>
                    <p>Corporate</p>
                    <p>Private Client</p>
                </div>

                <div className="footer-contact">
                    <h3>CONTACT</h3>
                    <p>info@lexvanguard.legal</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-divider"/>

                <div className="footer-rights">
                    <p>&copy; 2026 VG Nair. All Rights Reserved.</p>
                    <p className="footer-about">Architected with precision.</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;