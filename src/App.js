import './App.css';

import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import BuyCresh from "./sections/BuyCresh";
import Footer from "./components/common/Footer";
import LoadingScreen from "./components/common/LoadingScreen";

import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadResource = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        };

        const loadImages = () => {
            const images = Array.from(document.images);
            const imagePromises = images.map(img => {
                return new Promise((resolve, reject) => {
                    if (img.complete) {
                        resolve();
                    } else {
                        img.onload = resolve;
                        img.onerror = reject;
                    }
                });
            });
            return Promise.all(imagePromises);
        };

        const loadStylesheets = () => {
            const stylesheets = Array.from(document.styleSheets);
            const stylesheetPromises = stylesheets.map(sheet => {
                return new Promise((resolve) => {
                    try {
                        if (!sheet.href) {
                            resolve();
                        }
                        const link = document.createElement('link');
                        link.href = sheet.href;
                        link.onload = resolve;
                    } catch (e) {
                        resolve();
                    }
                });
            });
            return Promise.all(stylesheetPromises);
        };

        const loadAssets = async () => {
            try {
                await Promise.all([loadResource(), loadImages(), loadStylesheets()]);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки ресурсов:", error);
            }
        };

        loadAssets();
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
                    <About />

                    <Tokenomics />

                    <Roadmap />

                    <div className="roadmap-bg"></div>

                    <BuyCresh />

                    <div className="app__footer">
                        <Footer/>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
