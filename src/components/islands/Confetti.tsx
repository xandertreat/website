import React from 'react';
import { $coloredElements, $maxColoredElements } from '../../scripts/stores/coloredElements.ts';
import { useStore } from '@nanostores/react';
import Confetti from 'react-confetti'

const SiteConfetti : React.FC = () => {
  return (
    <Confetti
      className="size-full"
      numberOfPieces={(useStore($coloredElements) >= useStore($maxColoredElements)) ? 50 : 0}
    />
  )
}

export default SiteConfetti;