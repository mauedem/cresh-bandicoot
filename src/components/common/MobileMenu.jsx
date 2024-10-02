import './MobileMenu.css'

import Star from "../../assets/sections/common/Star.svg";
import MenuClose from "../../assets/sections/common/MenuClose.svg";
import CreshBandicoot from "../../assets/sections/about/CreshBandicoot.svg";
import Footer from "./Footer";
import {useEffect, useRef} from "react";

function MobileMenu({ navItems, handleMenuVisible }) {
    function useOutsideClickHandler(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    handleMenuVisible();
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const mobileMenuRef = useRef(null);
    useOutsideClickHandler(mobileMenuRef);

    return (
        <div className="mobile-menu" ref={mobileMenuRef}>
            <button
                className="mobile-menu__close-menu-btn"
                onClick={handleMenuVisible}
                style={{alignSelf: 'self-start', margin: '14px'}}
            >
                <img
                    className="mobile-menu__close-menu-img"
                    src={MenuClose} alt=""
                />
            </button>

            <img
                className="mobile-menu__cresh-bandicot"
                src={CreshBandicoot} alt=""
            />

            <button className="buy-cresh-btn" style={{marginBottom: '14px'}}>
                <img className="buy-cresh-btn__img" src={Star} alt="" style={{width: '19px', height: '19px'}}/>
                BUY $CRESH
                <img className="buy-cresh-btn__img" src={Star} alt="" style={{width: '19px', height: '19px'}}/>
            </button>

            <nav className="header__nav">{navItems}</nav>

            <Footer />
        </div>
    )
}

export default MobileMenu;
