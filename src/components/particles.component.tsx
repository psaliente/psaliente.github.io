import { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { getPortfolioParticlesConfig } from "../constants";
import React from "react";

function PortfolioParticles() {
    const [init, setInit] = useState(false);

    const options: ISourceOptions = useMemo(() => {
        return getPortfolioParticlesConfig();
    }, []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {
        console.log(container);
    }

    if (init) {
        return <Particles id="portfolioParticles" options={options} particlesLoaded={particlesLoaded}/>
    }
    return <></>
}

export default React.memo(PortfolioParticles);
