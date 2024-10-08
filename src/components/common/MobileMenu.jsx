import './MobileMenu.css'

import Star from "../../assets/sections/common/Star.svg";
import MenuClose from "../../assets/sections/common/MenuClose.svg";
import CreshBandicoot from "../../assets/sections/common/CreshBandicoot.png";
import Footer from "./Footer";

function MobileMenu({ navItems, handleMenuVisible }) {
    return (
        <div className="mobile-menu">
            <button
                className="mobile-menu__close-menu-btn"
                onClick={handleMenuVisible}
                style={{alignSelf: 'self-start', margin: '14px'}}
            >
                <img
                    className="mobile-menu__close-menu-img"
                    src={MenuClose}
                    alt="Close menu"
                />
            </button>

            <img
                className="mobile-menu__cresh-bandicot"
                src={CreshBandicoot}
                alt="Cresh Bandicoot"
            />

            <button
                className="buy-cresh-btn"
                style={{marginBottom: '14px'}}
            >
                <img
                    className="buy-cresh-btn__img"
                    style={{width: '19px', height: '19px'}}
                    src={Star}
                    alt="Star"
                />

                BUY $CRESH

                <img
                    className="buy-cresh-btn__img"
                    style={{width: '19px', height: '19px'}}
                    src={Star}
                    alt="Star"
                />
            </button>

            <nav className="header__nav">{navItems}</nav>

            <Footer />
        </div>
    )
}

export default MobileMenu;
