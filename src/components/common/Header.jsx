import NavButton from "./NavButton";
import MobileMenu from "./MobileMenu";

import {BUY_CRESH_LINK, LINK_ITEMS, NAV_ITEMS} from "../../utils/constants";
import {useEffect, useState} from "react";

import './Header.css'
import './LinkButton.css'

import Star from "../../assets/sections/common/Star.svg"
import MenuOpen from "../../assets/sections/common/MenuOpen.svg"

function Header() {
    const [isTheEndOfPage, setIsTheEndOfPage] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function goToHrefName(href) {
        document.getElementById(href).scrollIntoView({ behavior: 'smooth' });

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

    function handleClick(linkHref) {
        window.open(linkHref, '_blank');
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
                        alt="Open menu"
                    />
                </button>
            }

            {isMenuVisible &&
                <div
                    className="header__mobile-menu"
                    style={{ position: 'static' }}
                >
                    <MobileMenu
                        handleMenuVisible={() => toggleMenuVisible()}
                        navItems={navItems}
                    />
                </div>
            }

            <div className={!isTheEndOfPage ? 'header--fixed' : 'header--static'}>
                <div className="header__links">
                    <button
                        className="nav-btn link-button"
                        onClick={() => handleClick(LINK_ITEMS[0].href)}
                    >
                        <img
                            className="link-button--tg"
                            src={LINK_ITEMS[0].src}
                            alt="Tg"
                        />
                    </button>

                    <button
                        className="nav-btn link-button"
                        onClick={() => handleClick(LINK_ITEMS[1].href)}
                    >
                        <img
                            className="link-button--x"
                            src={LINK_ITEMS[1].src}
                            alt="X"
                        />
                    </button>

                    <button
                        className="nav-btn link-button"
                        onClick={() => handleClick(LINK_ITEMS[2].href)}
                    >
                        <img
                            className="link-button--owl"
                            src={LINK_ITEMS[2].src}
                            alt=""
                        />
                    </button>
                </div>

                {!isMenuVisible &&
                    <button className="buy-cresh-btn" onClick={() => handleClick(BUY_CRESH_LINK)}>
                        <img
                            className="buy-cresh-btn__img"
                            src={Star}
                            alt="Star"
                        />
                        BUY $CRESH
                        <img
                            className="buy-cresh-btn__img"
                            src={Star}
                            alt="Star"
                        />
                    </button>
                }
            </div>
        </header>
    )
}

export default Header;
