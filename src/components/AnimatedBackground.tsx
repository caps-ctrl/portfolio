import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const StarryBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000", // czarne tło jak nocne niebo
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff", // białe gwiazdy
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 0.6, // tempo migotania
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // różne wielkości gwiazd
          },
          shadow: {
            enable: true,
            color: "#ffffff",
            blur: 5, // delikatna poświata
          },
          move: {
            enable: false, // gwiazdy statyczne
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default StarryBackground;
