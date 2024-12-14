import React, { useEffect } from "react";
import {
  $coloredElements,
  $maxColoredElements,
} from "../../scripts/stores/coloredElements.ts";
import { useStore } from "@nanostores/react";
import ConfettiExplosion from "react-confetti-explosion";
import SFX from "../../assets/sound/win.mp3";

export const Component: React.FC = () => {
  const showConfetti =
    useStore($coloredElements) >= useStore($maxColoredElements);
  const audio = new Audio(SFX);
  audio.volume = 0.5;

  useEffect(() => {
    if (showConfetti) {
      audio.play().catch((err) => console.error("Audio play failed:", err));
    }
  }, [showConfetti]);

  return (
    showConfetti &&
      <ConfettiExplosion
        className="absolute inset-x-1/2 inset-y-full"
        particleCount={300}
        duration={10000}
        force={0.4}
        width={5000}
        height={"800vh"}
      />
  );
};

export default Component;
