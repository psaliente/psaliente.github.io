import { ISourceOptions } from "@tsparticles/engine";
import { COLORS } from "./colors.constants";

export const getPortfolioParticlesConfig = (): ISourceOptions => {
    const computedDistance = (window.innerHeight + window.innerWidth) / 8;
    const computedPopulation = (window.innerHeight + window.innerWidth) / 32; 

    return {
        particles: {
            number: {
            value: computedPopulation
            },
            color: {
            value: COLORS.GREEN2
            },
            links: {
            enable: true,
            distance: computedDistance,
            color: {
                value: COLORS.GREEN2
            },
            opacity: 1
            },
            shape: {
            type: "circle"
            },
            opacity: {
            value: 1
            },
            size: {
            value: {
                min: 2,
                max: 6
            }
            },
            move: {
            enable: true,
            speed: 2
            }
        },
        poisson: {
        enable: true
        }
    };
}