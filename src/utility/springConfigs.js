import { bounce, gentle } from 'react-spring'

const config = { easing: bounce }

const fromLeft = {
  config,
  from: { x: -100, opacity: 0.2 },
  to: { x: 0, opacity: 1 },
}

const fromRight = {
  config,
  from: { x: 100, opacity: 0.2 },
  to: { x: 0, opacity: 1 },
}

const fromDown = {
  config,
  from: { y: 100, opacity: 0.2 },
  to: { y: 0, opacity: 1 },
}

const fromUp = {
  config,
  from: { y: -100, opacity: 0.2 },
  to: { y: 0, opacity: 1 },
}

const zoomIn = {
  config,
  from: { scale: 0, x: 100 },
  to: { scale: 1, x: 0 },
}

const longFadeIn = {
  config: { duration: 1000 },
  from: { opactiy: 0 },
  to: { opacity: 1 },
}

const fromDownDelayed = {
  config: { easing: bounce },
  delay: 2500,
  from: {
    y: 300,
  },
  to: { y: 0 },
}

const buttonPulse = {
  config: { duration: 1500, easing: gentle },
  delay: 100,
  from: {
    scale: 1.15,
  },
  to: {
    scale: 1,
  },
  loop: { reverse: true },
}

export {
  fromLeft,
  fromRight,
  fromUp,
  fromDown,
  zoomIn,
  longFadeIn,
  fromDownDelayed,
  buttonPulse,
}
