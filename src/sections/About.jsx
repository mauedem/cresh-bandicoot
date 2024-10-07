import Header from "../components/common/Header";
import CreshCard from "../components/about/CreshCard";
import AboutCard from "../components/about/AboutCard";
import OriginCard from "../components/about/OriginCard";

import {useEffect} from "react";

import './About.css'

import CreshBandicoot from "../assets/sections/about/CreshBandicoot.png"
import Box from "../assets/sections/about/Box.png"
import RightPalm from "../assets/sections/about/RightPalm.png"
import LeftPalm from "../assets/sections/about/LeftPalm.png"
import Flag from "../assets/sections/about/Flag.svg"
import GirlFlying from "../assets/sections/about/GirlFlying.png"
import CreshRiding from "../assets/sections/about/CreshRiding.png"
import Treasure from "../assets/sections/about/Treasure.png"
import TreasureShadow from "../assets/sections/about/TreasureShadow.svg"
import Coin1 from "../assets/sections/about/Coin1.png"
import Coin2 from "../assets/sections/about/Coin2.png"

function About() {
    useEffect(() => {
        const onScroll = () => {
            console.log('START')
            const scrollContainer = document.querySelector('.about__cresh-content');

            console.log('scrollContainer.scrollHeight - scrollContainer.scrollTop = ', scrollContainer.scrollHeight - scrollContainer.scrollTop)
            console.log('scrollContainer.clientHeight = ', scrollContainer.clientHeight)
            console.log(scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight)

            scrollContainer.addEventListener('scroll', () => {
                if (Math.floor(scrollContainer.scrollHeight - scrollContainer.scrollTop) <= Math.floor(scrollContainer.clientHeight)) {
                    // Если содержимое прокручено до конца
                    console.log('YES')
                    // document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
                } else {
                    console.log('NO')
                }
            });

            // Убедитесь, что при загрузке страницы прокрутка полностью выключена
            // document.body.style.overflow = 'hidden';



            // const block = document.querySelector('.about__cresh-content');
            // const scrollY = window.scrollY;
            //
            // block.style.transform = `translateY(${-scrollY}px)`;
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <section className="about">
            <div className="about__1-bg">
                <Header/>

                <div className="about__cresh-content">
                    <img
                        className="about__cresh-bandicoot"
                        src={CreshBandicoot} alt=""
                    />

                    <img
                        className="about__box"
                        src={Box} alt=""
                    />

                    <div className="about__cresh-card">
                        <CreshCard/>
                    </div>

                    <div className="about__about-card">
                        <AboutCard/>
                    </div>

                    <div className="about__origin-card">
                        <OriginCard/>
                    </div>
                </div>

                <img
                    className="about__right-palm"
                    src={RightPalm}
                    alt=""
                />

                <img
                    className="about__left-palm"
                    src={LeftPalm} alt=""
                />

                <img
                    className="about__flag"
                    src={Flag} alt=""
                />
            </div>

            <div className="about__2-bg">
                <div className="about__about-content">
                    <div style={{position: 'relative'}}>
                        <img
                            className="about__girl-flying"
                            src={GirlFlying} alt=""
                        />

                        <img
                            className="about__cresh-riding"
                            src={CreshRiding} alt=""
                        />

                        <img
                            className="about__treasure"
                            src={Treasure} alt=""
                        />

                        <img
                            className="about__treasure-shadow"
                            src={TreasureShadow} alt=""
                        />

                        <img
                            className="about__coin-1"
                            src={Coin1} alt=""
                        />

                        <img
                            className="about__coin-2"
                            src={Coin2} alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
