import React from 'react'
import * as SiIcons from 'react-icons/si'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="inner-footer">
                    <ul>
                        <li className="social-items"><a href="/Facebook"><SiIcons.SiFacebook /></a></li>
                        <li className="social-items"><a href="/twitter"><SiIcons.SiTwitter /></a></li>
                        <li className="social-items"><a href="/Instagram"><SiIcons.SiInstagram /></a></li>
                        <li className="social-items"><a href="/LinkedIn"><SiIcons.SiLinkedin /></a></li>
                    </ul>
                </div>
                <div className="quick-links">
                    <ul>
                        <li className="quick-items"><a href="/home">Home</a></li>
                        <li className="quick-items"><a href="/Settings">Settings</a></li>
                        <li className="quick-items"><a href="/About us">About us</a></li>
                        <li className="quick-items"><a href="/Contact us">Contact us</a></li>
                    </ul>
                </div>
                <div className="outer-footer">
                    Copyright &copy; YourCart. All Rights Reserved
                </div>
            </footer>
        </div>
    )
}

export default Footer
