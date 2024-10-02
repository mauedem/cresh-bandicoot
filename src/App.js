import './App.css';

import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import BuyCresh from "./sections/BuyCresh";
import Footer from "./components/common/Footer";

function App() {
    return (
        <div className="App">
            <About/>

            <Tokenomics/>

            <Roadmap/>

            <div className="roadmap-bg" />

            <BuyCresh/>

            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
