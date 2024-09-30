import BuyCreshCard from "../components/buy-cresh/BuyCreshCard";
import Footer from "../components/common/Footer";

import {STEPS} from "../utils/constants";

import './BuyCresh.css'

import CreshBuying from "../assets/sections/buy-cresh/CreshBuying.svg"
import GirlWatching from "../assets/sections/buy-cresh/GirlWatching.svg"

function BuyCresh(){


    return (
        <section className="buy-cresh">
            <BuyCreshCard steps={STEPS} />

            <img
                style={{
                    position: "absolute",
                    top: '460px',
                    right: '40%',
                    height: '447px',
                    width: '224px'
                }}
                src={CreshBuying} alt=""
            />

            <img
                style={{
                    position: 'absolute',
                    right: '2%',
                    bottom: '27%',
                    width: '132px',
                    height: '338px'
                }}
                src={GirlWatching} alt=""
            />

            <Footer />
        </section>
    )
}

export default BuyCresh;
