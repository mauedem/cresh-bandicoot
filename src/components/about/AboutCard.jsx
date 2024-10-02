import './AboutCard.css'

import AboutCardStars from "../../assets/sections/about/AboutCardStars.svg"

function AboutCard() {
    return (
        <article className="about-card">
            <div className="about-card__title">
                <a name="about">About</a>
            </div>

            <div className="about-card__subtitle">Who’s Cresh?</div>

            <div className="about-card__content">
                <span>
                    He’s not just a former president, he’s a wild badger with a new token.
                    Leaving the jungles behind, Cresh crashes into the Ethereum blockchain
                    to defeat his enemies—and break the rules.
                </span>
                <br/>
                <span>
                    His mission? To win the presidential race and take over the crypto space,
                    one tweet (and one block) at a time.
                </span>
            </div>

            <img
                className="about-card__decoration"
                src={AboutCardStars} alt=""
            />
        </article>
    )
}

export default AboutCard;
