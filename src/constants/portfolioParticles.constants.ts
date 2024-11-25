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
                value: COLORS.GREEN4
            },
            links: {
                enable: true,
                distance: computedDistance,
                color: {
                    value: COLORS.GREEN4
                },
                opacity: 0.25
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.25
            },
            size: {
                value: {
                    min: 2,
                    max: 7
                }
            },
            move: {
                enable: true,
                speed: 0.2
            }
        },
        poisson: {
            enable: true
        }
    };
}