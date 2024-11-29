import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import Target from '../Components/Target'
import { calculateSizes } from '../constants'
import ReactLogo from '../Components/ReactLogo'
import Cube from '../Components/Cube'
import Rings from '../Components/Rings'
import HeroCamera from '../Components/HeroCamera'
import Button from '../Components/Button'

export default function Hero() {
    // const x = useControls
    // ('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     },
       
       
    // })
    const isMobile = useMediaQuery({maxWidth: 768})
    const isSmall = useMediaQuery({maxWidth: 440})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative pt-5'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm Anezi <span className='waving-hand'>👋</span></p>
            <p className="hero_tag text-gray_gradient">
               I Build Products & Brands
            </p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className='w-full h-full mt-40'>
                <Suspense fallback={ <CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,15]} />
                    <HeroCamera >
                        <HackerRoom
                        position={sizes.deskPosition} 
                        rotation={[0, -Math.PI, 0]}
                        scale={sizes.deskScale}
                        />
                    </HeroCamera>
                    

                    <group> 
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo  position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings  position={sizes.ringPosition}/>
                    </group>
                    
                    <ambientLight  intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5} />
                </Suspense> 
            </Canvas>
        </div>

        <div className="absolute -bottom-64 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
            </a>
        </div>
    </section>
  )
}
