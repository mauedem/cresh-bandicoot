import LinkButton from "./LinkButton";

import {LINK_ITEMS} from "../../utils/constants";

import './Footer.css'

function Footer() {
    const linkItemsBtn = LINK_ITEMS.map(
        item => {
            return (
                <LinkButton
                    className="nav-btn"
                    key={item.id}
                    linkName={item.name}
                    linkSrc={item.src}
                    linkHref={item.href}
                />
            )
        }
    );

    return (
        <footer className="footer">
            <div style={{marginBottom: '30px'}}>{linkItemsBtn}</div>

            <div className="footer__text">
                <div>
                    All trademarks referenced herein are the properties of their respective owners.
                </div>

                <div style={{ marginTop: '10px' }}>
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
