import { ISourceOptions } from "@tsparticles/engine";
import { COLORS } from "./colors.constants";

export const getPortfolioParticlesConfig = (width: number, height: number): ISourceOptions => {
    const computedDistance = (width + height) / 16;
    const computedPopulation = (width + height) / 32; 

    return {
        particles: {
            number: {
                value: computedPopulation,
                density: {
                    enable: true,
                    height: height,
                    width: width
                }
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
                opacity: 0.5,
                
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: "circle"
            },
            size: {
                value: {
                    min: 1,
                    max: 3
                }
            },
            move: {
                enable: true,
                speed: 0.2,
                random: false,
                straight: false,
                outModes: 'out',
                attract: {
                    enable: false,
                    rotate: {
                        x: 600,
                        y: 1200
                    }
                }
            }
        },
        style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: '-5'
        }
    };
}