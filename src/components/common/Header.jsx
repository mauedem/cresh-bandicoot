import NavButton from "./NavButton";
import LinkButton from "./LinkButton";

import './Header.css'

import Star from "../../assets/sections/buy-cresh/Star.svg"
import {LINK_ITEMS, NAV_ITEMS} from "../../utils/constants";


function Header() {
    const navItems = NAV_ITEMS.map(
        item => {
            return (
                <NavButton
                    className="header__nav-btn"
                    key={item.id}
                    buttonText={item.name}
                    buttonHref={item.href}
                >
                    {item.name}
                </NavButton>
            )
        }
    );

    const linkItems = LINK_ITEMS.map(
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
        <header className="header">
            <nav className="header__nav">{navItems}</nav>

            <div className="header--fixed">
                <div className="header__links">{linkItems}</div>

                <button className="buy-cresh-btn">
                    <img className="buy-cresh-btn__img" src={Star} alt=""/>
                    BUY $CRESH
                    <img className="buy-cresh-btn__img" src={Star} alt=""/>
                </button>
            </div>
        </header>
    )
}

export default Header;
