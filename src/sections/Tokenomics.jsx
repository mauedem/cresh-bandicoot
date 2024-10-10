import TokenomicsCard from "../components/tokenomics/TokenomicsCard";

import './Tokenomics.css'

import VotePaper from "../assets/sections/common/VotePaper.webp";
import BlackHR from "../assets/sections/tokenomics/BlackHR.png";

import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";

function Tokenomics() {
    const tokenomicsRef = useRef();

    const controls = useAnimation();
    const [isTokenomicsCardReached, setIsTokenomicsCardReached] = useState(false);
    const [isTokenomicsCardVisible, setIsTokenomicsCardVisible] = useState(false);

    const handleScroll = () => {
        const rect = tokenomicsRef.current.getBoundingClientRect();

        if (rect.top >= 0) {
            setTimeout(() => setIsTokenomicsCardReached(true), 300)
            setTimeout(() => setIsTokenomicsCardVisible(true), 300)
        } else if (rect.top < -130) {
            setTimeout(() => setIsTokenomicsCardReached(false), 300)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isTokenomicsCardReached) {
            controls.start({y: 0});
        } else {
            controls.start({y: -400}).then(() => {
                setIsTokenomicsCardVisible(false);
            });
        }
    }, [isTokenomicsCardReached, controls]);

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
                {isTokenomicsCardVisible &&
                    <motion.div
                        initial={{y: 400}}
                        animate={controls}
                        transition={{
                            duration: 0.5,
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
