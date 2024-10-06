import {LINK_ITEMS} from "../../utils/constants";

import './Footer.css'
import './LinkButton.css'

function Footer() {
    function handleClick(linkHref) {
        window.open(linkHref, '_blank');
    }

    return (
        <footer className="footer">
            <div className="footer__links" style={{marginBottom: '30px'}}>
                <button
                    className="nav-btn link-button"
                    onClick={() => handleClick(LINK_ITEMS[0].href)}
                >
                    <img className="link-button--tg" src={LINK_ITEMS[0].src} alt=""/>
                </button>

                <button
                    className="nav-btn link-button"
                    onClick={() => handleClick(LINK_ITEMS[1].href)}
                >
                    <img className="link-button--tg" src={LINK_ITEMS[1].src} alt=""/>
                </button>

                <button
                    className="nav-btn link-button"
                    onClick={() => handleClick(LINK_ITEMS[2].href)}
                >
                    <img className="link-button--owl" src={LINK_ITEMS[2].src} alt=""/>
                </button>
            </div>

            <div className="footer__text">
                <div>
                    All trademarks referenced herein are the properties of their respective owners.
                </div>

                <div style={{marginTop: '10px'}}>
                    All rights to Crash Bandicoot belong to Activision. Images and characters used are for parody
                    purposes only and are not intended to infringe on any commercial or copyright interests.
                </div>

                <div style={{ marginTop: '10px' }}>
                    © 2024 Cresh Bandicoot
                </div>
            </div>
        </footer>
    )
}

export default Footer;
