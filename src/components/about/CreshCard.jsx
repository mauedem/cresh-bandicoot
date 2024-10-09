import './CreshCard.css'

import Star from "../../assets/sections/about/CreshCardStars.svg"

function MainCard() {
    return (
        <div className="cresh-card">
            <img className="cresh-card__decoration" src={Star} alt=""/>

            <div className="cresh-card__title">
                Cresh Trump
            </div>

            <img className="cresh-card__decoration" src={Star} alt=""/>
        </div>
    )
}

export default MainCard;
