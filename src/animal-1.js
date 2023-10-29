import {  useGLTF  } from '@react-three/drei'


export default function Animal_1()
{
   
    const animal_1 = useGLTF('./animal/black_dragon_with_idle_animation.glb')

    console.log(animal_1)

  
    return <>
  
                    <primitive 
                    object={ animal_1.scene } 
                    scale={ 3.01}
                    position={ [ 90.5, 0.0, 30 ] }
                    rotation-y={2 }

                     />

                    
    </>
}