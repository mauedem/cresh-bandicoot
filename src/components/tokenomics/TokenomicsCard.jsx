import './TokenomicsCard.css'

import AboutCardStars from "../../assets/sections/about/AboutCardStars.svg"
import {TOKEN} from "../../utils/constants";

function TokenomicsCard() {
    return (
        <article
            id="tokenomics-card"
            className="tokenomics-card"
        >
            <div className="tokenomics-card__title">
                <a>Tokenomics</a>
            </div>

            <div className="tokenomics-card__token">{TOKEN}</div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div className="tokenomics-card__content">
                    <div style={{display: 'flex', flexDirection: 'column', marginRight: '14px'}}>
                        <div className="tokenomics-card__content--key">Name:</div>
                        <div className="tokenomics-card__content--key">Ticker:</div>
                        <div className="tokenomics-card__content--key">Blockchain:</div>
                        <div className="tokenomics-card__content--key">Supply:</div>
                        <div className="tokenomics-card__content--key">Initial Liquidity:</div>
                        <div className="tokenomics-card__content--key">LP Lock:</div>
                        <div className="tokenomics-card__content--key">Tax:</div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div className="tokenomics-card__content--value">CRESH TRUMP</div>
                        <div className="tokenomics-card__content--value">$CRESH</div>
                        <div className="tokenomics-card__content--value">Ethereum</div>
                        <div className="tokenomics-card__content--value">1,000,000,000</div>
                        <div className="tokenomics-card__content--value">1 ETH</div>
                        <div className="tokenomics-card__content--value">6 months</div>
                        <div className="tokenomics-card__content--value">0%</div>
                    </div>
                </div>

                <div>
                    <img
                        className="tokenomics-card__decoration"
                        src={AboutCardStars}
                        alt="Stars"
                    />
                </div>
            </div>
        </article>
    )
}

export default TokenomicsCard;
