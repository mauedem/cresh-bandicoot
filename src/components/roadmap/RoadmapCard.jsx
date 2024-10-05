import './RoadmapCard.css'

import RoadmapStars from "../../assets/sections/roadmap/RoadmapCardStars.svg";
import ArrowLeft from "../../assets/sections/about/ArrowLeft.svg";
import ArrowRight from "../../assets/sections/about/ArrowRight.svg";

function RoadmapCard({ title, subtitle, content, style, handleClick}) {
    const contentTexts = content.map((content, idx) => {
        return (
            <div
                key={idx}
                className="roadmap-card__content"
                style={{ margin: '8px 12px'}}
            >
                {content}
            </div>
        )
    });

    const roadmapCardStyle = {
        ...style,
    }

    return (
        <div className="roadmap-card" style={roadmapCardStyle}>
            <div className="roadmap-card__subtitle">
                <div className="roadmap-card__controller">
                    <button
                        onClick={() => handleClick(-1)}
                        className="roadmap-card__btn"
                        style={{marginRight: 'auto', marginLeft: '8px'}}
                    >
                        <img src={ArrowLeft} alt=""/>
                    </button>

                    {subtitle}

                    <button
                        onClick={() => handleClick(+1)}
                        className="roadmap-card__btn"
                        style={{marginLeft: 'auto', marginRight: '8px'}}
                    >
                        <img src={ArrowRight} alt=""/>
                    </button>
                </div>
            </div>

            <div className="roadmap-card__title">
                {title}
            </div>

            <div>
                {contentTexts}
            </div>

            <img
                className="roadmap-card__decoration"
                src={RoadmapStars} alt=""
            />
        </div>
    )
}

export default RoadmapCard;
