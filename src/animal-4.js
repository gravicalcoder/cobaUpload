import {  useGLTF  } from '@react-three/drei'


export default function Animal_4()
{
   
    const animal_4 = useGLTF('./animal/high_quality_octopus.glb')

    console.log(animal_4)

  
    return <>
  
                    <primitive 
                    object={ animal_4.scene } 
                    scale={1000.01}
                    position={ [ -130.5, 0.0, -50 ] }
                    rotation-y={2 }

                     />

                    
    </>
}