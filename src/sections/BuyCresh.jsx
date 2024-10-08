import BuyCreshCard from "../components/buy-cresh/BuyCreshCard";
import Footer from "../components/common/Footer";

import confetti from 'canvas-confetti';

import {useEffect, useRef} from 'react';

import {STEPS} from "../utils/constants";

import './BuyCresh.css'

import CreshBuying from "../assets/sections/buy-cresh/CreshBuying.png"
import AngryKamila from "../assets/sections/buy-cresh/AngryKamila.gif"
import CreshAndBall from "../assets/sections/roadmap/CreshAndBall.gif";

function BuyCresh(){
    const ref = useRef(null);

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

    // TODO вызывать ф-ию когда cresh buy в зоне видимости
    useEffect(() => {
        const shootIntervals = [0, 100, 200].map((delay) =>
            setTimeout(shoot, delay)
        );

        // Cleanup timeouts on component unmount
        return () => {
            shootIntervals.forEach(clearTimeout);
        };
    }, []);

    return (
        <section ref={ref} className="buy-cresh">
            <BuyCreshCard steps={STEPS}/>

            <img
                className="buy-cresh__cresh-and-ball"
                src={CreshAndBall}
                alt="Cresh and Ball"
            />

            <canvas
                id="confetti"
                className="buy-cresh__confetti"
                width="480"
                height="320"
            >
            </canvas>

            <img
                className="buy-cresh__cresh-buying"
                src={CreshBuying}
                alt="Cresh Buying"
            />

            <img
                className="buy-cresh__angry-kamila"
                src={AngryKamila}
                alt="Angry Kamila"
            />

            <div className="buy-cresh__footer">
                <Footer/>
            </div>
        </section>
    )
}

export default BuyCresh;
