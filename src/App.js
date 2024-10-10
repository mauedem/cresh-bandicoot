import './App.css';

import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import BuyCresh from "./sections/BuyCresh";
import Footer from "./components/common/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

import { useEffect, useState } from "react";

import AboutBg from "./assets/sections/about/AboutBg.png"
import TokenomicsBg from "./assets/sections/tokenomics/TokenomicsBg.png"
import RoadmapBg from "./assets/sections/roadmap/RoadmapBg.png"
import BuyCreshBg from "./assets/sections/buy-cresh/BuyCreshBg.png"
import CreshBandicoot from "./assets/sections/about/CreshBandicoot.svg"
import Clouds from "./assets/sections/about/Clouds.png"
import Cloud1 from "./assets/sections/about/Cloud1.svg"
import Cloud2 from "./assets/sections/about/Cloud2.svg"
import MainHead from "./assets/sections/about/MainHead.webp"
import RightPalm from "./assets/sections/about/RightPalm.png"
import LeftPalm from "./assets/sections/about/LeftPalm.png"
import Flag from "./assets/sections/about/Flag.webp"
import SpinningBox from "./assets/sections/about/SpinningBox.gif"
import KamilaFlying from "./assets/sections/about/KamilaFlying.webp"
import CreshRiding from "./assets/sections/about/CreshRiding.png"

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const images = [
            AboutBg,
            TokenomicsBg,
            RoadmapBg,
            BuyCreshBg,
            CreshBandicoot,
            Clouds,
            Cloud1,
            Cloud2,
            MainHead,
            RightPalm,
            LeftPalm,
            Flag,
            SpinningBox,
            KamilaFlying,
            CreshRiding,
        ];

        let loadedImages = 0;
        const totalImages = images.length;

        const start = Date.now();

        images.forEach((src) => {
            const img = new Image();

            img.src = src;

            img.onload = () => {
                loadedImages++;
                setProgress(Math.floor((loadedImages / totalImages) * 100));

                if (loadedImages === totalImages) {
                    const end = Date.now();

                    const elapsed = end - start;

                    // Проверяем, прошло ли 2 секунды.
                    const timeToWait = Math.max(2000 - elapsed, 0);

                    setTimeout(() => {
                        setLoading(false);
                    }, timeToWait);
                }
            };
        });

        const handleStyleLoad = () => {
            setProgress((prev) => Math.min(prev + 50, 100));
        };

        const styleSheets = document.styleSheets;
        Array.from(styleSheets).forEach((sheet) => {
            try {
                if (sheet.cssRules) {
                    handleStyleLoad();
                }
            } catch (err) {
                console.log('Error loading styles')
            }
        });
    }, []);

    return (
        <div className="App">
            {loading ? (
                <LoadingScreen progress={progress} />
            ) : (
                <>
                    <About />

                    <Tokenomics />

                    <Roadmap />

                    <div className="roadmap-bg"></div>

                    <BuyCresh />

                    <div className="app__footer">
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
