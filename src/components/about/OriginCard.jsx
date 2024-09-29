import {useState} from "react";

import './OriginCard.css'

import AboutCardStars from "../../assets/sections/about/AboutCardStars.svg"
import ArrowLeft from "../../assets/sections/about/ArrowLeft.svg"
import ArrowRight from "../../assets/sections/about/ArrowRight.svg"

function OriginCard() {
    const [isFirstPartShown, setIsFirstPartShown] = useState(true)

    function handleClick(value) {
        setIsFirstPartShown(value)
    }

    return (
        <article className="origin-card">
            <div className="origin-card__title">
                <a>The Origins of Cresh</a>
            </div>
            <div className="origin-card__text">
                {isFirstPartShown ?
                    <span>
                        Once a regular presidential candidate, Cresh Trump
                        took on challenges no one thought he could.
                        From building walls to battling the "fake news" media,
                        his life has been one wild spin.
                        But even with all his victories, something was missing.
                    </span>
                :
                    <span>
                        Then, Cresh stumbled upon Ethereum. No rallies, no debates,
                        just crypto and nerds talking about "decentralized finance."
                        He didn’t understand, but that didn’t stop him.
                        Armed with his meme-powered spins, he launched $CRESH,
                        the token nobody expected but everyone needs.
                    </span>
                }
            </div>

            <div style={{ marginTop: '30px' }}>
                <button
                    onClick={() => handleClick(true)}
                    className="origin-card__btn"
                    style={{ marginRight: '10px' }}
                >
                    <img src={ArrowLeft} alt=""/>
                </button>

                <button
                    onClick={() => handleClick(false)}
                    className="origin-card__btn"
                >
                    <img src={ArrowRight} alt=""/>
                </button>
            </div>

            <img style={{ width: '355px', height: '38.4px', marginTop: '30px' }} src={AboutCardStars} alt=""/>
        </article>
    )
}

export default OriginCard;
