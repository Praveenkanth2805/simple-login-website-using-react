import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => (
  <Particles
    options={{
      background: { color: "#1e1e2f" },
      particles: {
        color: { value: "#a855f7" },
        number: { value: 50 },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: { speed: 1 },
      },
    }}
  />
);

export default ParticlesBackground;