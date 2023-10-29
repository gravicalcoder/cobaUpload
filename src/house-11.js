import {  useGLTF  } from '@react-three/drei'


export default function House_11()
{
   
    const house_11 = useGLTF('./rumahe/windmill_game_ready.glb')

  
    return <>
  
                    <primitive 
                    object={ house_11.scene } 
                    scale={ 1000.01}
                    position={ [ 179.5, 1.0, -350 ] }
                    rotation-y={2 }

                     />

                    
    </>
}