import './LoadingScreen.css'

import Cresh from "../../assets/sections/common/Cresh.png"
import VotePaper from "../../assets/sections/common/VotePaper.gif"

function LoadingScreen({ progress }) {
    return (
        <div className="loading-screen">
            <img
                className="loading-screen__vote-paper"
                src={VotePaper}
                alt="Vote paper"
            />

            <img
                className="loading-screen__cresh-trump"
                src={Cresh}
                alt="Cresh"
            />

            <div className="loading-screen__title">
                Cresh Trump
            </div>

            <div className="loading-screen__progress">
                {progress}%
            </div>
        </div>
    )
}

export default LoadingScreen;
