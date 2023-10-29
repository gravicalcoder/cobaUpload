import {  useGLTF  } from '@react-three/drei'


export default function Animal_5()
{
   
    const animal_5 = useGLTF('./animal/icy_dragon.glb')

    console.log(animal_5)

  
    return <>
  
                    <primitive 
                    object={ animal_5.scene } 
                    scale={0.1}
                    position={ [ -130.5, 0.0, 50 ] }
                    rotation-y={2 }

                     />

                    
    </>
}