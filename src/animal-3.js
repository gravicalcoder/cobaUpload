import {  useGLTF  } from '@react-three/drei'


export default function Animal_3()
{
   
    const animal_3 = useGLTF('./animal/demon_dragon.glb')

    console.log(animal_3)

  
    return <>
  
                    <primitive 
                    object={ animal_3.scene } 
                    scale={530.01}
                    position={ [ 130.5, 100.0, 0 ] }
                    rotation-y={2 }

                     />

                    
    </>
}