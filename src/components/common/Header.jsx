import NavButton from "./NavButton";
import LinkButton from "./LinkButton";
import MobileMenu from "./MobileMenu";

import './Header.css'

import {LINK_ITEMS, NAV_ITEMS} from "../../utils/constants";
import {useEffect, useState} from "react";

import Star from "../../assets/sections/common/Star.svg"
import MenuOpen from "../../assets/sections/common/MenuOpen.svg"


function Header() {
    const [isTheEndOfPage, setIsTheEndOfPage] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function goToHrefName(href) {
        window.location.hash = href;

        setIsMenuVisible(false);
    }

    const navItems = NAV_ITEMS.map(
        item => {
            return (
                <NavButton
                    className="nav-btn"
                    key={item.id}
                    buttonText={item.name}
                    buttonHref={item.href}
                    handleClick={() => goToHrefName(item.href)}
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
                    className="nav-btn"
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
            const result = window.scrollY + 1 >=
                document.documentElement.scrollHeight-document.documentElement.clientHeight;

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

    function toggleMenuVisible() {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <header className="header">
            <div className="header__nav-wrapper">
                <nav className="header__nav">{navItems}</nav>
            </div>

            {!isMenuVisible &&
                <button
                    className="header__open-menu-btn"
                    onClick={toggleMenuVisible}
                    style={{margin: '14px'}}
                >
                    <img
                        className="header__open-menu-img"
                        src={MenuOpen}
                        alt=""
                    />
                </button>
            }

            {isMenuVisible &&
                <div className="header__mobile-menu" style={{ position: 'static' }}>
                    <MobileMenu
                        handleMenuVisible={() => toggleMenuVisible()}
                        linkItems={linkItems}
                        navItems={navItems}
                    />
                </div>
            }

            <div className={!isTheEndOfPage ? 'header--fixed' : 'header--static'}>
                <div className="header__links">{linkItems}</div>

                {!isMenuVisible &&
                    <button className="buy-cresh-btn">
                        <img className="buy-cresh-btn__img" src={Star} alt=""/>
                        BUY $CRESH
                        <img className="buy-cresh-btn__img" src={Star} alt=""/>
                    </button>
                }
            </div>
        </header>
    )
}

export default Header;
