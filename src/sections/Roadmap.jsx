import RoadmapCard from "../components/roadmap/RoadmapCard";

import {PHASES} from "../utils/constants";

import './Roadmap.css'

import {useState} from "react";

import Mask from "../assets/sections/roadmap/Mask.svg";
import CreshCounting from "../assets/sections/roadmap/CreshCounting.svg";
import Island1 from "../assets/sections/roadmap/Island1.svg";
import Island2 from "../assets/sections/roadmap/Island2.svg";
import Island3 from "../assets/sections/roadmap/Island3.svg";

function Roadmap() {
    const [currentPhase, setCurrentPhase] = useState(PHASES[0]);

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
        <section className="roadmap">
            <img
                className="roadmap__mask"
                src={Mask} alt=""
            />
            <img
                className="roadmap__cresh-counting"
                src={CreshCounting} alt=""
            />

            <div className="roadmap__phases">
                <img
                    className="roadmap__island-1"
                    src={Island1} alt=""
                />

                <div className="roadmap__islands">
                    <img
                        className="roadmap__island-2"
                        src={Island2} alt=""
                    />

                    <img
                        className="roadmap__island-3"
                        src={Island3} alt=""
                    />
                </div>
            </div>

            <div className="roadmap__cards">
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
