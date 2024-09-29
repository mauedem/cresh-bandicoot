import './App.css';

import About from "./sections/About";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import BuyCresh from "./sections/BuyCresh";

function App() {
    return (
        <div className="App">
            <About />

            <Tokenomics />

            <Roadmap />

            <BuyCresh />
        </div>
    );
}

export default App;
