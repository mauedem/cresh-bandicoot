import BuyCreshCard from "../components/buy-cresh/BuyCreshCard";
import Footer from "../components/common/Footer";

import {STEPS} from "../utils/constants";

import './BuyCresh.css'

function BuyCresh(){


    return (
        <section className="buy-cresh">
            <BuyCreshCard steps={STEPS} />

            {/*<img*/}
            {/*    style={{ position: 'relative', left: '44%', bottom: '36%', width: '132px', height: '338px' }}*/}
            {/*    src={GirlWatching} alt=""*/}
            {/*/>*/}

            <Footer />
        </section>
    )
}

export default BuyCresh;
