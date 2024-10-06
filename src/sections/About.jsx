import Header from "../components/common/Header";
import CreshCard from "../components/about/CreshCard";
import AboutCard from "../components/about/AboutCard";
import OriginCard from "../components/about/OriginCard";

import './About.css'

import CreshBandicoot from "../assets/sections/about/CreshBandicootPng.png"
import Box from "../assets/sections/about/Box.svg"
import RightPalm from "../assets/sections/about/RightPalm.svg"
import LeftPalm from "../assets/sections/about/LeftPalm.svg"
import Flag from "../assets/sections/about/Flag.svg"
import GirlFlying from "../assets/sections/about/GirlFlying.svg"
import CreshRiding from "../assets/sections/about/CreshRiding.svg"
import Treasure from "../assets/sections/about/Treasure.svg"
import TreasureShadow from "../assets/sections/about/TreasureShadow.svg"
import Coin1 from "../assets/sections/about/Coin1.svg"
import Coin2 from "../assets/sections/about/Coin2.svg"

function About() {
    return (
        <section className="about">
            <div className="about__1-bg">
                <Header/>

                <div id="about" className="about__cresh-content">
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
                    height="686px"
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
