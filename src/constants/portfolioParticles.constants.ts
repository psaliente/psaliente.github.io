import { ISourceOptions } from "@tsparticles/engine";
import { COLORS } from "./colors.constants";

export const getPortfolioParticlesConfig = (): ISourceOptions => ({
    particles: {
        number: {
          value: 50
        },
        color: {
          value: COLORS.GREEN2
        },
        links: {
          enable: true,
          distance: 300,
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
  })