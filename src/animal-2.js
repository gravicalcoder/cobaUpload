import {  useGLTF  } from '@react-three/drei'


export default function Animal_2()
{
   
    const animal_2 = useGLTF('./animal/animated_dragon_three_motion_loops.glb')

    console.log(animal_2)

  
    return <>
  
                    <primitive 
                    object={ animal_2.scene } 
                    scale={20.01}
                    position={ [ 130.5, 0.0, 30 ] }
                    rotation-y={2 }

                     />

                    
    </>
}