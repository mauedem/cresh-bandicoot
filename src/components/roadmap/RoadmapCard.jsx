import './RoadmapCard.css'

import RoadmapStars from "../../assets/sections/roadmap/RoadmapCardStars.svg";

function RoadmapCard({ title, subtitle, content, style}) {
    const contentTexts = content.map((content, idx) => {
        return (
            <div
                key={idx}
                className="roadmap-card__content-text"
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
            <div className="roadmap-card__subtitle" style={{ marginTop: '16px', marginBottom: '4px' }}>
                <a name="roadmap">{subtitle}</a>
            </div>

            <div className="roadmap-card__title" style={{marginBottom: '14px'}}>
                {title}
            </div>

            <div className="roadmap-card__content" style={{marginBottom: '12px'}}>
                {contentTexts}
            </div>

            <img
                style={{margin: '8px 12px'}}
                src={RoadmapStars} alt=""
            />
        </div>
    )
}

export default RoadmapCard;
