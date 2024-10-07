import TokenomicsCard from "../components/tokenomics/TokenomicsCard";

import './Tokenomics.css'

import {useEffect} from "react";

function Tokenomics() {
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
        <section className="tokenomics">
            <div className="tokenomics__content">
                <TokenomicsCard />
            </div>
        </section>
    )
}

export default Tokenomics;
