import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Hologram = ({isMobile}) => {
  // const model = useGLTF('./desktop_pc/scene.gltf')
  const model = useGLTF('./robot_playground/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <pointLight intensity={1} />
      <primitive 
        object={model.scene}
        // scale={0.75}
        scale={isMobile ? 1.5 : 1.75}
        position={[0, -2.7, 0]}
        rotation={[0, 2.3, 0.1]}
      />
    </mesh>
  )
}

const HologramCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if its currently mobile sized
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches)

    // Handle media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    
    // Add event listener for changes to mediaQuery
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove event listener if component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Hologram isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default HologramCanvas