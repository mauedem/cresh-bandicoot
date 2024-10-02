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
                className="buy-cresh__cresh-buying"
                src={CreshBuying} alt=""
            />

            <img
                className="buy-cresh__girl-watching"
                src={GirlWatching} alt=""
            />

            <div className="buy-cresh__footer">
                <Footer />
            </div>
        </section>
    )
}

export default BuyCresh;
