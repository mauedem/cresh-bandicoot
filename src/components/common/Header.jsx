import NavButton from "./NavButton";
import LinkButton from "./LinkButton";

import './Header.css'

import Star from "../../assets/sections/buy-cresh/Star.svg"
import {LINK_ITEMS, NAV_ITEMS} from "../../utils/constants";
import {useEffect, useState} from "react";


function Header() {
    const [isTheEndOfPage, setIsTheEndOfPage] = useState(false);

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

    useEffect(() => {
        const onScroll = () => {
            const result = window.scrollY + 1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight;

            if (result && !isTheEndOfPage) {
                setIsTheEndOfPage(true);
            } else if (!result && isTheEndOfPage) {
                setIsTheEndOfPage(false);
            }
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [isTheEndOfPage]);

    return (
        <header className="header">
            <nav className="header__nav">{navItems}</nav>

            <div className={!isTheEndOfPage ? 'header--fixed' : 'header--static' }>
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
