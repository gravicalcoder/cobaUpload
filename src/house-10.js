import {  useGLTF  } from '@react-three/drei'


export default function House_10()
{
   
    const house_10 = useGLTF('./rumahe/house_no05.glb')

  
    return <>
  
                    <primitive 
                    object={ house_10.scene } 
                    scale={ 9.01}
                    position={ [ 179.5, 1.0, -200 ] }
                    rotation-y={2 }

                     />

                    
    </>
}