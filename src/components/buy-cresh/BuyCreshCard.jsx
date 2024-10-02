import {useState} from "react";

import './BuyCreshCard.css'

import EmptyCircle from "../../assets/sections/buy-cresh/EmptyCircle.svg"
import FilledCircle from "../../assets/sections/buy-cresh/FilledCircle.svg"

function BuyCreshCard({ steps }) {
    const [currentStep, setCurrentStep] = useState(steps[0]);

    const imgItems = steps.map((step, idx) => {
        return (
            <img
                key={step.id}
                onClick={() => handleClick(idx)}
                className="step__circle"
                style={{cursor: "pointer", marginRight: '8px'}}
                src={currentStep.id === step.id ? FilledCircle : EmptyCircle}
                alt=""
            />
        )
    })

    function handleClick(idx) {
        setCurrentStep(steps[idx])
    }

    return (
        <div className="buy-cresh-card">
            <div className="buy-cresh-card__wrapper">
                <div
                    className="buy-cresh-card__title buy-cresh-card__title--red"
                    style={{ marginBottom: '20px' }}
                >
                    HOW TO BUY
                </div>
                <div
                    className="buy-cresh-card__title buy-cresh-card__title--blue"
                    style={{ marginBottom: '20px' }}
                >
                    <a name="how-to-buy-$cresh">$CRESH</a>
                </div>

                <button className="buy-cresh-card__buy-cresh-btn buy-cresh-btn">
                    BUY $CRESH
                </button>
            </div>

            <div className="buy-cresh-card__steps">
                <div className="step">
                    <div className="step__subtitle">{currentStep.subtitle}</div>
                    <div className="step__title">{currentStep.title}</div>
                    <div className="step__text">{currentStep.text}</div>
                </div>

                <div className="step__controller">
                    {imgItems}
                </div>
            </div>
        </div>
    )
}

export default BuyCreshCard;
