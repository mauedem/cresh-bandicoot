import Header from "../components/common/Header";
import CreshCard from "../components/about/CreshCard";
import AboutCard from "../components/about/AboutCard";
import OriginCard from "../components/about/OriginCard";

import {useEffect, useState} from "react";

import { motion } from 'framer-motion';

import './About.css'

import Clouds from "../assets/sections/about/Clouds.png"
import CreshBandicoot from "../assets/sections/common/CreshBandicoot.png"
import SpinningBox from "../assets/sections/about/SpinningBox.gif"
import RightPalm from "../assets/sections/about/RightPalm.png"
import LeftPalm from "../assets/sections/about/LeftPalm.png"
import Flag from "../assets/sections/about/Flag.gif"
import KamilaFlying from "../assets/sections/about/KamilaFlying.png"
import Fire2 from "../assets/sections/about/Fire2.png"
import Fire3 from "../assets/sections/about/Fire3.png"
import Fire4 from "../assets/sections/about/Fire1.png"
import CreshRiding from "../assets/sections/about/CreshRiding.png"
import Treasure from "../assets/sections/about/Treasure.png"
import TreasureShadow from "../assets/sections/about/TreasureShadow.svg"
import Coin1 from "../assets/sections/about/Coin1.png"
import Coin2 from "../assets/sections/about/Coin2.png"

function About() {
    const [currentFire, setCurrentFire] = useState(0);
    const [creshSpinning, setCreshSpinning] = useState(false);

    const fireImages = [
        Fire2,
        Fire3,
        Fire4,
    ];

    /* TODO скролл - доработать или убрать */
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFire((prev) => (prev + 1) % fireImages.length);
        }, 140); // Интервал смены изображений огней

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about">
            <div id="section-1" className="about__1-bg">
                <Header/>

                <div className="about__cresh-content">
                    <motion.div
                        className="about__cresh-bandicoot"
                        style={{display: 'inline-block', transformOrigin: 'center center'}}
                        initial={{y: 0}}
                        animate={creshSpinning ? {rotateY: [0, 3240]} : {y: [-200, -100, 0]}}
                        transition={{
                            duration: creshSpinning ? 0.5 : 0.5,
                            ease: creshSpinning ? "linear" : "easeOut",
                            repeat: creshSpinning ? Infinity : 0,
                            repeatDelay: creshSpinning ? 3.5 : 0,
                            onComplete: () => {
                                if (!creshSpinning) {
                                    setCreshSpinning(true)
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
                        <CreshCard/>
                    </div>

                    <div id="section-2"
                         className="about__about-card"
                    >
                        <AboutCard/>
                    </div>

                    <div
                        id="section-3"
                        className="about__origin-card"
                    >
                        <OriginCard/>
                    </div>
                </div>

                <motion.div
                    className="about__clouds"
                    style={{display: 'flex', justifyContent: 'center'}}
                    animate={{x: ['-1%', '100%']}}
                    transition={{
                        duration: 500,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
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
                        duration: 4,
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

                <img className="about__flag" src={Flag} alt="Flag" />
            </div>

            <div className="about__2-bg">
                <div className="about__about-content">
                <div style={{position: 'relative'}}>
                        <motion.div
                            style={{
                                position: 'relative',
                                bottom: '140px',
                                left: '4%',
                            }}
                        >
                            <motion.img
                                className="about__fire-1"
                                src={fireImages[currentFire]}
                                alt="Fire"
                                animate={{
                                    y: [0, -16, 0],
                                    rotate: [0, 4, -4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                }}
                            />

                            <motion.img
                                src={KamilaFlying}
                                alt="Kamila Flying"
                                className="about__kamila-flying"
                                animate={{
                                    y: [0, -16, 0],
                                    rotate: [0, 4, -4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                }}
                            />

                            <motion.img
                                className="about__fire-2"
                                src={fireImages[currentFire]}
                                alt="Fire"
                                animate={{
                                    y: [0, -16, 0],
                                    rotate: [0, 4, -4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>

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
