import './TokenomicsCard.css'

import AboutCardStars from "../../assets/sections/about/AboutCardStars.svg"


function TokenomicsCard() {
    return (
        <article className="tokenomics-card" style={{ marginTop: '180px' }}>
            <div className="tokenomics-card__title">
                <a name="tokenomics">Tokenomics</a>
            </div>

            <div className="tokenomics-card__content">
                <div style={{ display: "flex", flexDirection: "column", marginRight: '14px' }}>
                    <div className="tokenomics-card__content--key">Name: </div>
                    <div className="tokenomics-card__content--key">Ticker: </div>
                    <div className="tokenomics-card__content--key">Blockchain: </div>
                    <div className="tokenomics-card__content--key">Supply: </div>
                    <div className="tokenomics-card__content--key">Initial Liquidity: </div>
                    <div className="tokenomics-card__content--key">LP Lock: </div>
                    <div className="tokenomics-card__content--key">Liquidity Pool: </div>
                    <div className="tokenomics-card__content--key">Partnerships: </div>
                    <div className="tokenomics-card__content--key">Team: </div>
                    <div className="tokenomics-card__content--key">Tax: </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="tokenomics-card__content--value">CRESH TRUMP</div>
                    <div className="tokenomics-card__content--value">$CRESH</div>
                    <div className="tokenomics-card__content--value">Ethereum</div>
                    <div className="tokenomics-card__content--value">1,000,000,000</div>
                    <div className="tokenomics-card__content--value">1.5 ETH</div>
                    <div className="tokenomics-card__content--value">6 months</div>
                    <div className="tokenomics-card__content--value">85%</div>
                    <div className="tokenomics-card__content--value">10%</div>
                    <div className="tokenomics-card__content--value">5%</div>
                    <div className="tokenomics-card__content--value">0%</div>
                </div>
            </div>

            <img style={{width: '355px', height: '38.4px', marginTop: '16px'}} src={AboutCardStars} alt=""/>
        </article>
    )
}

export default TokenomicsCard;
