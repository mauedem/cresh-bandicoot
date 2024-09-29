import TokenomicsCard from "../components/tokenomics/TokenomicsCard";

import './Tokenomics.css'

function Tokenomics() {
    return (
        <section className="tokenomics">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <TokenomicsCard />
            </div>
        </section>
    )
}

export default Tokenomics;
