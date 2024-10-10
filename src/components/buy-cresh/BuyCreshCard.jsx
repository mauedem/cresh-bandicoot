import {useEffect, useRef, useState} from "react";

import './BuyCreshCard.css'

import EmptyCircle from "../../assets/sections/buy-cresh/EmptyCircle.svg"
import FilledCircle from "../../assets/sections/buy-cresh/FilledCircle.svg"

import confetti from "canvas-confetti";

function BuyCreshCard({ steps }) {
    const [currentStep, setCurrentStep] = useState(steps[0]);
    const [hasBuyCreshCardBeenVisible, setHasBuyCreshCardBeenVisible] = useState(false);

    const buyCreshCardRef = useRef(null);
    const stepRef = useRef(null);

    const scalar = 2;
    const unicorn = confetti.shapeFromText({text: '🍋', scalar});

    const defaults = {
        spread: 360,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 20,
        shapes: [unicorn],
        scalar
    };

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 30
        });

        confetti({
            ...defaults,
            particleCount: 5,
            flat: true
        });

        confetti({
            ...defaults,
            particleCount: 15,
            scalar: scalar / 2,
            shapes: ['circle']
        });
    };

    const handleScroll = () => {
        if (buyCreshCardRef.current) {
            const rect = buyCreshCardRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasBuyCreshCardBeenVisible) {
                setTimeout(shoot, 0);
                setTimeout(shoot, 100);
                setTimeout(shoot, 200);

                setHasBuyCreshCardBeenVisible(true);
            } else if (rect.bottom < 0 || rect.top > window.innerHeight) {
                setHasBuyCreshCardBeenVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBuyCreshCardBeenVisible]);

    const imgItems = steps.map((step, idx) => {
        return (
            <img
                key={step.id}
                onClick={() => handleClick(idx)}
                className="step__circle"
                style={{cursor: "pointer", marginRight: '8px'}}
                src={currentStep.id === step.id ? FilledCircle : EmptyCircle}
                alt="Circle"
            />
        )
    })

    function handleClick(idx) {
        stepRef.current.classList.add('step--hidden');

        setCurrentStep(steps[idx])

        setTimeout(() => stepRef.current.classList.remove('step--hidden'), 500)
    }

    return (
        <div ref={buyCreshCardRef} className="buy-cresh-card">
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
                    <a id="how-to-buy-$cresh">$CRESH</a>
                </div>

                <button className="buy-cresh-card__buy-cresh-btn buy-cresh-btn">
                    BUY $CRESH
                </button>
            </div>

            <div className="buy-cresh-card__steps">
                <div ref={stepRef} className="step step--visible">
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
