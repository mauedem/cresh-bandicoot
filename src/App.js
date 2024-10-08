import './App.css';

import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import BuyCresh from "./sections/BuyCresh";
import Footer from "./components/common/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

import {useEffect, useState} from "react";

function App() {
    /* TODO вернуть загрузочный экран useState(true) */
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleLoad = () => {
            // Убедимся, что загрузка занимает не менее 2 секунд
            let minLoadingTime = setTimeout(() => {
                /* TODO вернуть загрузочный раскомментить */
                setLoading(false);
            }, 2000);

            return () => clearTimeout(minLoadingTime);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    // Эмуляция прогресса загрузки
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    // Остановить, если прогресс уже завершен
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1; // Увеличивать прогресс на 1%
            });
        }, 20); // Каждые 20 мс

        return () => clearInterval(interval);
    }, []);

    // const sections = ['section-1', 'section-2', 'section-3'];

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         event.preventDefault();
    //         const delta = Math.sign(event.deltaY);
    //         const nextSection =
    //             delta > 0 ? document.querySelector(
    //                 `#${sections[1]}`) : document.querySelector(`#${sections[0]}`
    //             );
    //
    //         if (nextSection) {
    //             nextSection.scrollIntoView({behavior: 'smooth'});
    //         }
    //     };
    //
    //   window.addEventListener('wheel', handleScroll, { passive: false });
    //
    //   return () => {
    //     window.removeEventListener('wheel', handleScroll);
    //   };
    // }, []);

    return (
        <div className="App">
            {loading ? (
                <LoadingScreen progress={progress} />
            ) : (
                <>
                    <About/>

                    <Tokenomics/>

                    <Roadmap/>

                    <div className="roadmap-bg"></div>

                    <BuyCresh/>

                    <div className="app__footer">
                        <Footer/>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
