import LinkButton from "./LinkButton";

import {LINK_ITEMS} from "../../utils/constants";

import './Footer.css'

function Footer() {
    const linkItemsBtn = LINK_ITEMS.map(
        item => {
            return (
                <LinkButton
                    className="header__nav-btn"
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
                All trademarks referenced herein are the properties of their respective owners. <br/>
                All rights to Crash Bandicoot belong to Activision. Images and characters used are for parody
                purposes only and are not intended to infringe on any commercial or copyright interests. <br/>
                © 2024 Name
            </div>
        </footer>
    )
}

export default Footer;
