import {  useGLTF  } from '@react-three/drei'


export default function House_9()
{
   
    const house_9 = useGLTF('./rumahe/house_marcus_lucretius_room_18_pompeii_retopo.glb')

  
    return <>
  
                    <primitive 
                    object={ house_9.scene } 
                    scale={ 1.01}
                    position={ [ 179.5, 3.0, -130 ] }
                    rotation-y={2 }

                     />

                    
    </>
}