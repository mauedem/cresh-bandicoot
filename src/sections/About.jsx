import Header from "../components/common/Header";
import AboutCard from "../components/about/AboutCard";
import OriginCard from "../components/about/OriginCard";

import {useEffect, useRef, useState} from "react";

import {motion, useAnimation} from 'framer-motion';

import './About.css'

import Clouds from "../assets/sections/about/Clouds.png"
import Cloud1 from "../assets/sections/about/Cloud1.svg"
import Cloud2 from "../assets/sections/about/Cloud2.svg"
import CreshBandicoot from "../assets/sections/common/CreshBandicoot.png"
import SpinningBox from "../assets/sections/about/SpinningBox.gif"
import MainHead from "../assets/sections/about/MainHead.webp"
import RightPalm from "../assets/sections/about/RightPalm.png"
import LeftPalm from "../assets/sections/about/LeftPalm.png"
import Flag from "../assets/sections/about/Flag.webp"
import KamilaFlying from "../assets/sections/about/KamilaFlying.webp"
import CreshRiding from "../assets/sections/about/CreshRiding.png"
import Treasure from "../assets/sections/about/Treasure.png"
import TreasureShadow from "../assets/sections/about/TreasureShadow.svg"
import Coin1 from "../assets/sections/about/Coin1.png"
import Coin2 from "../assets/sections/about/Coin2.png"

function About() {
    const aboutRef = useRef(null);

    const [isCreshSpinning, setIsCreshSpinning] = useState(false);
    const [isMainHeadAnimating, setIsMainHeadAnimating] = useState(false);

    const [currentScreenWidth, setCurrentScreenWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMainHeadAnimating(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const aboutCardRef = useRef(null);

    const controls = useAnimation();

    const [isAboutCardVisible, setIsAboutCardVisible] = useState(false);
    const [isAboutCardVisible2, setIsAboutCardVisible2] = useState(false);

    const originCardRef = useRef(null);

    const [isOriginCardVisible, setIsOriginCardVisible] = useState(false);
    const [isOriginCardVisible2, setIsOriginCardVisible2] = useState(false);

    const creshContentRef = useRef(null);

    const handleScroll = () => {
        const width = window.innerWidth;

        const aboutRect = aboutCardRef.current.getBoundingClientRect();
        const originRect = originCardRef.current.getBoundingClientRect();

        if (width < 1200) {
            setTimeout(() => setIsAboutCardVisible2(false))
            setTimeout(() => setIsOriginCardVisible2(false))
        }

        setCurrentScreenWidth(width);


        if (aboutRect.top >= 0 && aboutRect.bottom <= window.innerHeight) {
            setTimeout(() => setIsAboutCardVisible(true), 300)
            setTimeout(() => setIsAboutCardVisible2(true), 300)
        }

        if (originRect.top >= 0 && originRect.bottom <= window.innerHeight) {
            setTimeout(() => setIsOriginCardVisible(true), 300)
            setTimeout(() => setIsOriginCardVisible2(true), 300)
        }
    };

    const handleChildScroll = () => {
        const childElement = creshContentRef.current;

        if (childElement) {
            const isAtBottom
                = childElement.scrollHeight - childElement.scrollTop === childElement.clientHeight;

            if (isAtBottom) {
                const tokenomics = document.getElementById("tokenomics");
                tokenomics.scrollIntoView({ behavior: 'smooth' })
            }
        }
    };

    useEffect(() => {
        const child = creshContentRef.current

        if (child) {
            child.addEventListener('scroll', handleChildScroll);
        }

        return () => {
            if (child) {
                child.removeEventListener('scroll', handleChildScroll);
            }
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isAboutCardVisible) {
            controls.start({y: 0});
        } else {
            controls.start({y: -400})
        }
    }, [isAboutCardVisible, controls]);

    useEffect(() => {
        if (isOriginCardVisible) {
            controls.start({y: 0});
        } else {
            controls.start({y: -400})
        }
    }, [isOriginCardVisible, controls]);

    return (
        <section className="about">
            <div id="section-1" ref={aboutRef} className="about__part-1">
                <Header/>

                <div
                    id="about"
                    ref={creshContentRef}
                    className="about__cresh-content"
                >
                    <motion.div
                        className="about__cresh-bandicoot"
                        style={{display: 'inline-block', transformOrigin: 'center center'}}
                        initial={{y: 0}}
                        animate={isCreshSpinning ? {rotateY: [0, 3240]} : {y: [-200, -100, 0]}}
                        transition={{
                            duration: isCreshSpinning ? 0.5 : 0.5,
                            ease: isCreshSpinning ? "linear" : "easeOut",
                            repeat: isCreshSpinning ? Infinity : 0,
                            repeatDelay: isCreshSpinning ? 5 : 0,
                            onComplete: () => {
                                if (!isCreshSpinning) {
                                    setIsCreshSpinning(true)
                                }
                            }
                        }}
                    >
                        <img
                            className="about__cresh-bandicoot"
                            src={CreshBandicoot}
                            alt="Cresh Bandicoot"
                        />
                    </motion.div>

                    <motion.img
                        className="about__box"
                        src={SpinningBox}
                        alt="Box"
                        style={{
                            transform: 'translate(-50%, 50%)',
                        }}
                        animate={{scale: [0, 1.1, 1]}}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            repeat: 0,
                        }}
                    />

                    <div className="about__cresh-card">
                        {isMainHeadAnimating &&
                            <img
                                className="about__cresh-trump"
                                src={MainHead}
                                alt="Cresh Trump"
                            />
                        }
                    </div>

                    <div id="section-2"
                         ref={aboutCardRef}
                         className="about__about-card"
                    >
                        {isAboutCardVisible2 && currentScreenWidth >= 1200 &&
                            <motion.div
                                initial={{y: 400}}
                                animate={controls}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut",
                                }}
                                style={{
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <AboutCard/>
                            </motion.div>
                        }
                        {currentScreenWidth < 1200 &&
                            <AboutCard/>
                        }
                    </div>

                    <div
                        id="section-3"
                        ref={originCardRef}
                        className="about__origin-card"
                    >
                        {isOriginCardVisible2 && currentScreenWidth >= 1200 &&
                            <motion.div
                                initial={{y: 400}}
                                animate={controls}
                                transition={{
                                    duration: 2,
                                    ease: "easeOut",
                                }}
                                style={{
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                <OriginCard/>
                            </motion.div>
                        }
                        {currentScreenWidth < 1200 &&
                            <>
                                <OriginCard/>
                            </>
                        }
                    </div>
                </div>

                <motion.div
                    className="about__cloud-1"
                    style={{display: 'flex', justifyContent: 'center'}}
                    animate={{x: ['-1%', '100%']}}
                    transition={{
                        duration: 300,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: -0.9,
                        repeatDelay: 0,
                    }}
                >
                    <img
                        className="about__cloud-1"
                        src={Cloud1}
                        alt="Cloud"
                    />
                </motion.div>

                <motion.div
                    className="about__cloud-2"
                    style={{display: 'flex', justifyContent: 'center'}}
                    animate={{x: ['-1%', '100%']}}
                    transition={{
                        duration: 300,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: -0.9,
                        repeatDelay: 0,
                    }}
                >
                    <img
                        className="about__cloud-2"
                        src={Cloud2}
                        alt="Cloud"
                    />
                </motion.div>

                <motion.div
                    className="about__clouds"
                    style={{display: 'flex', justifyContent: 'center'}}
                    animate={{x: ['-1%', '100%']}}
                    transition={{
                        duration: 300,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: -0.9,
                        repeatDelay: 0,
                    }}
                >
                    <img
                        className="about__clouds"
                        src={Clouds}
                        alt="Clouds"
                    />
                </motion.div>

                <motion.div
                    className="about__right-palm"
                    animate={{rotate: [0, 2, -2, 0]}}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <img
                        className="about__right-palm"
                        src={RightPalm}
                        alt="Palm leaf"
                    />
                </motion.div>

                <motion.div
                    className="about__left-palm"
                    animate={{rotate: [0, 2, -2, 0]}}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <img
                        className="about__left-palm"
                        src={LeftPalm}
                        alt="Palm leaf"
                    />
                </motion.div>

                <img className="about__flag" src={Flag} alt="Flag"/>
            </div>

            <div className="about__part-2">
                <div className="about__about-content">
                    <div style={{position: 'relative'}}>
                        <img
                            className="about__kamila-flying"
                            src={KamilaFlying}
                            alt="Kamila Flying"
                        />

                        <motion.img
                            src={CreshRiding}
                            alt="Cresh Riding"
                            className="about__cresh-riding"
                            style={{
                                transform: 'translate(-50%, -50%)'
                            }}
                            animate={{
                                translateY: [-1, 1, -1], // Движение вверх и вниз
                                translateX: [-1, 1, -1], // Движение в стороны
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        />

                        <img
                            className="about__treasure"
                            src={Treasure}
                            alt="Treasure"
                        />

                        <img
                            className="about__treasure-shadow"
                            src={TreasureShadow}
                            alt="Treasure Shadow"
                        />

                        <img
                            className="about__coin-1"
                            src={Coin1}
                            alt="Coin"
                        />

                        <img
                            className="about__coin-2"
                            src={Coin2}
                            alt="Coin"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
