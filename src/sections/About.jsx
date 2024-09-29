import Header from "../components/common/Header";
import CreshCard from "../components/about/CreshCard";
import AboutCard from "../components/about/AboutCard";
import OriginCard from "../components/about/OriginCard";

import './About.css'

import CreshBandicoot from "../assets/sections/about/CreshBandicoot.svg"
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
            <Header />

            <div className="about__content">
                <img style={{
                    position: "absolute",
                    top: 8,
                    zIndex: 10,
                    height: '410px',
                    width: '205px',
                }} src={CreshBandicoot} alt=""/>

                <img style={{
                    position: "relative",
                    top: 402,
                    left: -30,
                    width: '167px',
                    height: '165px'
                }} src={Box} alt=""/>

                <div style={{position: "absolute", top: 470}}>
                    <CreshCard />
                </div>
            </div>

            <img
                style={{position: "absolute", top: 0, right: 0, zIndex: 0}}
                height="686px"
                src={RightPalm}
                alt=""
            />

            <img
                style={{position: "absolute", top: '6%'}}
                src={LeftPalm} alt=""
            />

            <img
                style={{position: "relative", top: 292, left: '77%', zIndex: 100}}
                src={Flag} alt=""
            />

            <div style={{position: 'relative', marginTop: '440px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <AboutCard/>
                </div>

                <div style={{ position: 'relative' }}>
                    <img
                        style={{
                            position: "relative",
                            left: '40px',
                            bottom: '130px',
                            height: '481px',
                            width: '457px'
                        }}
                        src={GirlFlying} alt=""
                    />

                    <img
                        style={{
                            position: "absolute",
                            bottom: '200px',
                            right: '22%',
                            height: '321px',
                            width: '282px'
                        }}
                        src={CreshRiding} alt=""
                    />

                    <img
                        style={{
                            position: "absolute",
                            bottom: '98px',
                            right: '64px',
                            height: '263px',
                            width: '221px',
                            zIndex: 10
                        }}
                        src={Treasure} alt=""
                    />

                    <img
                        style={{
                            position: "absolute",
                            right: '16px',
                            bottom: '-1px',
                            height: '263px',
                            width: '221px'
                        }}
                        src={TreasureShadow} alt=""
                    />

                    <img
                        style={{
                            position: "absolute",
                            bottom: '78px',
                            right: '23%',
                            height: '47px',
                            width: '67px'
                        }}
                        src={Coin1} alt=""
                    />

                    <img
                        style={{
                            position: "absolute",
                            bottom: '-130px',
                            right: '26%',
                            height: '66px',
                            width: '104px'
                        }}
                        src={Coin2} alt=""
                    />
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: '-150px'}}>
                    <OriginCard />
                </div>
            </div>
        </section>
    )
}

export default About;
