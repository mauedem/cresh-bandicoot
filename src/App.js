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
        // Эмуляция загрузки
        const loadResource = async () => {
            // Эмуляция ожидания 2 секунд
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setLoading(false);
        };

        loadResource();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1; // Увеличивать прогресс на 1%
            });
        }, 20); // Каждые 20 мс

        return () => clearInterval(interval);
    }, []);

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
