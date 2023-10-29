import {  useGLTF  } from '@react-three/drei'


export default function Animal_6()
{
   
    const animal_6 = useGLTF('./animal/thorny_octopus.glb')

    console.log(animal_6)

  
    return <>
  
                    <primitive 
                    object={ animal_6.scene } 
                    scale={30.1}
                    position={ [ -30.5, 65.0, 0.0 ] }
                    rotation-y={4 }

                     />

                    
    </>
}