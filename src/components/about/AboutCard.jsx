import './AboutCard.css'

import AboutCardStars from "../../assets/sections/about/AboutCardStars.svg"
// import { motion } from 'framer-motion';

function AboutCard() {
    /* TODO доработать скролл */
    // const controls = useAnimation();
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         console.log('scrollPosition = ', scrollPosition)
    //         const windowHeight = window.innerHeight;
    //         console.log('windowHeight = ', windowHeight)
    //
    //         // Проверяем, если мы прокрутили до нужной точки
    //         if (scrollPosition > windowHeight * 0.8) {
    //             setIsVisible(true);
    //         } else {
    //             setIsVisible(false);
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     if (isVisible) {
    //         controls.start({y: 0});
    //     } else {
    //         controls.start({y: 400});
    //     }
    // }, [isVisible, controls]);

    return (
        // <motion.div
        //     initial={{y: 400}}  // Начальная позиция ниже экрана
        //     animate={controls}
        //     transition={{duration: 0.5}}
        //     style={{
        //         transform: 'translateX(-50%)', // Центрируем по горизонтали
        //     }}
        // >
        //     <article className="about-card">
        //         <div className="about-card__title">
        //             About
        //         </div>
        //
        //         <div className="about-card__subtitle">Who’s Cresh?</div>
        //
        //         <div className="about-card__content">
        //         <span>
        //             He’s not just a former president, he’s a wild badger with a new token.
        //             Leaving the jungles behind, Cresh crashes into the Ethereum blockchain
        //             to defeat his enemies—and break the rules.
        //         </span>
        //             <br/>
        //             <span>
        //             His mission? To win the presidential race and take over the crypto space,
        //             one tweet (and one block) at a time.
        //         </span>
        //         </div>
        //
        //         <img
        //             className="about-card__decoration"
        //             src={AboutCardStars} alt=""
        //         />
        //     </article>
        // </motion.div>

        <article className="about-card">
            <div className="about-card__title">
                About
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
                src={AboutCardStars}
                alt="Stars"
            />
        </article>
    )
}

export default AboutCard;
