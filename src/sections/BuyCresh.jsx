import BuyCreshCard from "../components/buy-cresh/BuyCreshCard";
import Footer from "../components/common/Footer";

import {useRef} from 'react';

import {STEPS} from "../utils/constants";

import './BuyCresh.css'

import CreshBuying from "../assets/sections/buy-cresh/CreshBuying.png"
import AngryKamila from "../assets/sections/buy-cresh/AngryKamila.webp"
import CreshAndBall from "../assets/sections/buy-cresh/CreshAndBall.webp";

function BuyCresh(){
    const buyCresh = useRef(null);

    return (
        <section ref={buyCresh} className="buy-cresh">
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
