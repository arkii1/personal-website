import React, { useEffect } from 'react'
import { useSpring, animated, easeIn } from 'react-spring'
import propTypes from 'prop-types'

function Divider({
  colour = 'white',
  scale = '1000',
  width = '100%',
  height = '1px',
}) {
  const [props, set] = useSpring(() => ({
    width: '0',
    opacity: 0.2,
    config: { easeing: easeIn },
  }))

  useEffect(() => {
    setTimeout(() => {
      set({ width, opacity: 1 })
    }, 1000)
  }, [])

  return (
    <animated.div
      className={`bg-${colour}-${scale}`}
      style={{
        // eslint-disable-next-line react/prop-types
        width: props.width,
        height,
        background: colour,
        transform: 'translate3d(0,0,0)',
      }}
    />
  )
}

Divider.propTypes = {
  colour: propTypes.string,
  scale: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
}

export default Divider
