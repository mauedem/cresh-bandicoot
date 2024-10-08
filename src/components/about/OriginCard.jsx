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

            <div className="origin-card__content">
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

            <div className="origin-card__controller">
                <button
                    onClick={() => handleClick(true)}
                    className="origin-card__btn"
                    style={{marginRight: '10px'}}
                    disabled={isFirstPartShown}
                >
                    <img
                        src={ArrowLeft}
                        alt="Left"
                    />
                </button>

                <button
                    onClick={() => handleClick(false)}
                    className="origin-card__btn"
                    disabled={!isFirstPartShown}
                >
                    <img
                        src={ArrowRight}
                        alt="Right"
                    />
                </button>
            </div>

            <img
                className="origin-card__decoration"
                src={AboutCardStars}
                alt="Stars"
            />
        </article>
    )
}

export default OriginCard;
