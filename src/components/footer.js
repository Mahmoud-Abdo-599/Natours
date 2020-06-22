import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="../img/logo-green-2x.png" alt="Full logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Company</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Carrers</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Privacy policy</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Terms</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by, <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="footer__link">Mahmoud Abdo</a>,  Designed by, <a href="https://codingheroes.io/" target="_blank" className="footer__link">Jonas Schmedtmann</a>. to show work and learning purposes,
                         to view more of my projects you can visit my <a href="https://github.com/Mahmoud-Abdo-599" target="_blank" className="footer__link">GitHub</a> or viewing my <a href="https://www.linkedin.com/in/mahmoud-abdo-a5b765102/" target="_blank" className="footer__link">LinkedIn</a> acount.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
