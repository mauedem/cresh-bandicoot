import BuyCreshCard from "../components/buy-cresh/BuyCreshCard";
import Footer from "../components/common/Footer";

import confetti from 'canvas-confetti';

import {useEffect, useRef, useState} from 'react';

import {STEPS} from "../utils/constants";

import './BuyCresh.css'

import CreshBuying from "../assets/sections/buy-cresh/CreshBuying.png"
import AngryKamila from "../assets/sections/buy-cresh/AngryKamila.webp"
import CreshAndBall from "../assets/sections/buy-cresh/CreshAndBall.webp";

function BuyCresh(){
    const [hasBuyCreshCardBeenVisible, setHasBuyCreshCardBeenVisible] = useState(false);

    const ref = useRef(null);
    const buyCreshCardRef = useRef(null);

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

    return (
        <section ref={ref} className="buy-cresh">
            <BuyCreshCard steps={STEPS} />

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
                ref={buyCreshCardRef}
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
