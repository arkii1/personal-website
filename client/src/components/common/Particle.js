import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from '../../utility/particlesConfig'

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      className="h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    />
  )
}

export default Particle
