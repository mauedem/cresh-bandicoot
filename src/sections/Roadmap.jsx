import RoadmapCard from "../components/roadmap/RoadmapCard";

import {PHASES} from "../utils/constants";

import { motion } from 'framer-motion';

import {useRef, useState} from "react";

import './Roadmap.css'

import CreshBandicoot from "../assets/sections/common/CreshBandicoot.png";
import Table from "../assets/sections/roadmap/Table.png";
import Box1 from "../assets/sections/roadmap/Box1.gif";
import Box2 from "../assets/sections/roadmap/Box2.gif";
import Mask from "../assets/sections/roadmap/Mask.gif";
import CreshCounting from "../assets/sections/roadmap/CreshCounting.png";
import Island1 from "../assets/sections/roadmap/Island1.png";
import Island2 from "../assets/sections/roadmap/Island2.png";
import Island3 from "../assets/sections/roadmap/Island3.png";

function Roadmap() {
    const [currentPhase, setCurrentPhase] = useState(PHASES[0]);
    const [islandFloating, setIslandFloating] = useState(false);

    const ref = useRef(null);

    // Функция для получения значений translateY в зависимости от ширины экрана
    const getCreshCountingValues = () => {
        const width = window.innerWidth;

        if (width <= 575) {
            return [0, 46, 0];
        } else if (width >= 576 && width <= 767) {
            return [0, 80, 0];
        } else if (width >= 768 && width <= 991) {
            return [0, 90, 0];
        } else if (width >= 992 && width <= 1199) {
            return [0, 130, 0];
        } else {
            return [0, 160, 0];
        }
    };
    const creshCountingValues = getCreshCountingValues();

    // Функция для получения значений translateY в зависимости от ширины экрана
    const getCreshSpinningValues = () => {
        const width = window.innerWidth;

        if (width >= 992 && width <= 1199) {
            return {
                x: [-250, 0, 220, 0, -280],
                y: [50, 100, 50, 100, 50],
            }
        } else if (width >= 992 && width <= 1199) {
            return {
                x: [-280, 0, 300, 0, -240],
                y: [0, 100, 0, 100, 0],
            }
        }  else if (width >= 1200 && width <= 1439) {
            return {
                x: [-300, 0, 300, 0, -290],
                y: [25, 100, 25, 100, 25],
            }
        } else if (width > 1400) {
            return {
                x: [-380, 0, 300, 0, -380],
                y: [25, 100, 25, 100, 25],
            }
        }
    };
    const creshSpinningValues = getCreshSpinningValues();

    const roadmapPhases = PHASES.map(
        item => {
            return (
                <div
                    key={item.id}
                    className="roadmap__card-wrapper"
                >
                    <RoadmapCard
                        subtitle={item.subtitle}
                        title={item.title}
                        content={item.content}
                        style={item.style}
                        handleClick={changePhase}
                    />
                </div>

            )
        }
    );

    function changePhase(num) {
        const nextPhaseId = currentPhase.id + num

        if (nextPhaseId === 0 || nextPhaseId === 4) return;

        const nextCurrentPhase = PHASES.find(phase => phase.id === nextPhaseId);

        setCurrentPhase({...nextCurrentPhase});
    }

    return (
        <section ref={ref} className="roadmap">
            <img
                className="roadmap__table"
                src={Table}
                alt="Table"
            />
            <img
                className="roadmap__mask"
                src={Mask}
                alt="Mask"
            />

            <img
                className="roadmap__box-1"
                src={Box1}
                alt="Box"
            />

            <img
                className="roadmap__box-2"
                src={Box2}
                alt="Box"
            />

            <motion.img
                className="roadmap__cresh-counting"
                src={CreshCounting}
                alt="Cresh Counting"
                style={{
                    transform: 'translateX(-50%)'
                }}
                animate={{
                    translateY: creshCountingValues,
                }}
                transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            />

            <div className="roadmap__phases">
                <motion.img
                    className="roadmap__island-1"
                    src={Island1}
                    alt="Island"
                    style={{
                        transform: 'translate(-50%, 50%)',
                    }}
                    animate={islandFloating ? {y: [0, -30, 0], x: [0, 10, 0, -10, 0]} : {scale: [0, 1.1, 1]}}
                    transition={{
                        duration: islandFloating ? 4 : 1,
                        ease: islandFloating ? "linear" : "easeOut",
                        repeat: islandFloating ? Infinity : 0,
                        repeatType: 'loop',
                        onComplete: () => {
                            if (!islandFloating) {
                                setIslandFloating(true)
                            }
                        }
                    }}
                />

                <div className="roadmap__islands">
                    <motion.img
                        className="roadmap__cresh-bandicoot"
                        src={CreshBandicoot}
                        alt="Cresh"
                        style={{
                            filter: 'blur(3px)'
                        }}
                        animate={{
                            rotateY: [0, 12960],
                            ...creshSpinningValues
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        }}
                    />

                    <motion.img
                        className="roadmap__island-2"
                        src={Island2}
                        alt="Island"
                        style={{
                            transform: 'translate(-50%, 50%)',
                        }}
                        animate={islandFloating ? {y: [0, -30, 0], x: [0, 10, 0, -10, 0]} : {scale: [0, 1.1, 1]}}
                        transition={{
                            duration: islandFloating ? 3 : 1,
                            ease: islandFloating ? "linear" : "easeOut",
                            repeat: islandFloating ? Infinity : 0,
                            repeatType: 'loop',
                            onComplete: () => {
                                if (!islandFloating) {
                                    setIslandFloating(true)
                                }
                            }
                        }}
                    />

                    <motion.img
                        className="roadmap__island-3"
                        src={Island3}
                        alt="Island"
                        style={{
                            transform: 'translate(-50%, 50%)',
                        }}
                        animate={islandFloating ? {y: [0, -30, 0], x: [0, 10, 0, -10, 0]} : {scale: [0, 1.1, 1]}}
                        transition={{
                            duration: islandFloating ? 5 : 1,
                            ease: islandFloating ? "linear" : "easeOut",
                            repeat: islandFloating ? Infinity : 0,
                            repeatType: 'loop',
                            onComplete: () => {
                                if (!islandFloating) {
                                    setIslandFloating(true)
                                }
                            }
                        }}
                    />
                </div>
            </div>

            <div id="roadmap" className="roadmap__cards">
                <div className="roadmap__roadmap-cards">{roadmapPhases}</div>

                <div className="roadmap__roadmap-card">
                    <RoadmapCard
                        subtitle={currentPhase.subtitle}
                        title={currentPhase.title}
                        content={currentPhase.content}
                        style={{...currentPhase.style, transform: 'rotate(0deg)'}}
                        handleClick={changePhase}
                    />
                </div>
            </div>
        </section>
    )
}

export default Roadmap;
