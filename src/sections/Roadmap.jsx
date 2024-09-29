import RoadmapCard from "../components/roadmap/RoadmapCard";

import {PHASES} from "../utils/constants";

import './Roadmap.css'

import Mask from "../assets/sections/roadmap/Mask.svg";
import CreshCounting from "../assets/sections/roadmap/CreshCounting.svg";
import Island1 from "../assets/sections/roadmap/Island1.svg";
import Island2 from "../assets/sections/roadmap/Island2.svg";
import Island3 from "../assets/sections/roadmap/Island3.svg";

function Roadmap() {
    const roadmapPhases = PHASES.map(
        (item, idx) => {
            return (
                <RoadmapCard
                    key={item.id}
                    subtitle={item.subtitle}
                    title={item.title}
                    content={item.content}
                    style={item.style}
                />
            )
        }
    );

    return (
        <section className="roadmap">
            <img
                style={{position: "relative", bottom: '6%', left: '80%'}}
                src={Mask} alt=""
            />
            <img
                style={{position: "relative", left: '30%', bottom: '12px'}}
                src={CreshCounting} alt=""
            />

            <div style={{position: 'relative', marginTop: '400px'}}>
                <img
                    style={{position: "absolute", top: '-50px', left: '14%'}}
                    src={Island1} alt=""
                />

                <img
                    style={{position: "absolute", top: '43%', left: '38%'}}
                    src={Island2} alt=""
                />

                <img
                    style={{position: "absolute", top: '-50px', right: '20%'}}
                    src={Island3} alt=""
                />
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}} className="roadmap__cards">
                {roadmapPhases}
            </div>
        </section>
    )
}

export default Roadmap;
