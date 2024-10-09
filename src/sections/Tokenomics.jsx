import TokenomicsCard from "../components/tokenomics/TokenomicsCard";

import './Tokenomics.css'

import VotePaper from "../assets/sections/common/VotePaper.webp";
import BlackHR from "../assets/sections/tokenomics/BlackHR.png";

import {useRef} from "react";

function Tokenomics() {
    const ref = useRef(null);

    /* TODO доработать скролл */
    // useEffect(() => {
    //     const onScroll = () => {
    //         let card = document.getElementById('tokenomics-card');
    //         let lastScrollTop = 0;
    //
    //         let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //         console.log('scrollTop', scrollTop)
    //
    //         if (scrollTop > lastScrollTop) {
    //             // Если скроллим вниз, поднимаем карточку вверх
    //             card.style.transform = 'translateY(-100%)'; // Убрать карточку за экран
    //         } else {
    //             // Если скроллим вверх, возвращаем карточку обратно
    //             card.style.transform = 'translateY(0)'; // Возвращаем карточку
    //         }
    //
    //         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильного или негативного скролла
    //
    //     }
    //
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);


    return (
        <section ref={ref} className="tokenomics">
            <img
                className="tokenomics__black-hr"
                src={BlackHR}
                alt="Black line"
            />

            <img
                className="tokenomics__vote-paper"
                src={VotePaper}
                alt="Vote paper"
            />

            <div className="tokenomics__content">
                <TokenomicsCard />
            </div>
        </section>
    )
}

export default Tokenomics;
