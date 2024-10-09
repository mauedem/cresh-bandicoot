import TokenomicsCard from "../components/tokenomics/TokenomicsCard";

import './Tokenomics.css'

import VotePaper from "../assets/sections/common/VotePaper.webp";
import BlackHR from "../assets/sections/tokenomics/BlackHR.png";

import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";

function Tokenomics() {
    const tokenomicsRef = useRef();

    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleScroll = () => {
        const rect = tokenomicsRef.current.getBoundingClientRect();

        /* TODO добавить opacity */
        if (rect.top >= 0) {
            setTimeout(() => setIsVisible(true), 300)
            setTimeout(() => setIsVisible2(true), 300)
        } else if (rect.top < -130) {
            setTimeout(() => setIsVisible(false), 300)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({y: 0});
        } else {
            controls.start({y: -400}).then(() => {
                // Здесь можно вызвать дополнительные действия, если нужно
                setIsVisible2(false);
            });
        }
    }, [isVisible, controls]);

    return (
        <section id="tokenomics" ref={tokenomicsRef} className="tokenomics">
            <img
                className="tokenomics__black-hr"
                src={BlackHR}
                alt="Black line"
            />

            <img
                className="tokenomics__vote-paper"
                src={VotePaper}
                alt="Vote paper"
            />

            <div className="tokenomics__content">
                {isVisible2 &&
                    <motion.div
                        initial={{y: 400}}
                        animate={controls}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        style={{
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <TokenomicsCard/>
                    </motion.div>
                }
            </div>
        </section>
    )
}

export default Tokenomics;
