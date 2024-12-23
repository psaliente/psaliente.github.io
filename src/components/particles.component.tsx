import { Container, ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo, useState } from "react";
import { getPortfolioParticlesConfig } from "../constants";
import React from "react";
import useParticlesEngine from "../hooks/useParticlesEngine.hook";

type PortfolioParticlesPropType = {
    width: number,
    height: number
}

function PortfolioParticles({width, height}: PortfolioParticlesPropType) {
    const [init, setInit] = useState(false);

    const options: ISourceOptions = useMemo(() => getPortfolioParticlesConfig(width, height), [width, height]);

    useParticlesEngine(setInit);

    const particlesLoaded = async (container?: Container) => console.log(container)

    if (init) {
        return <Particles id="portfolioParticles" options={options} particlesLoaded={particlesLoaded}/>
    }
    return <></>
}

export default React.memo(PortfolioParticles);
