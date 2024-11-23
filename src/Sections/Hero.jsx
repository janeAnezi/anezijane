import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'

export default function Hero() {
    const x = useControls
    ('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10
        },
       
       
    })
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
            <Leva />
            <Canvas className='w-full h-full mt-56'>
                <Suspense fallback={ <CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,20]} />
                    <HackerRoom
                    //  scale={0.09}
                    //   position={[0,0,0]} rotation={[0,280,0]}
                     position={[2, -8, 2]} 
                     rotation={[0, -Math.PI, 0]}
                      scale={isMobile ? 0.09 : 0.1}
                      />
                    
                    <ambientLight  intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5} />
                </Suspense>

                
            </Canvas>

        </div>
      
    </section>
  )
}
