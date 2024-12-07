import { useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function useParticlesEngine(onInit?: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            if (onInit) onInit(true);
        });
    }, []);
}