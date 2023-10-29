import {  useGLTF  } from '@react-three/drei'


export default function House_8()
{
   
    const house_8 = useGLTF('./rumahe/house_cottage.glb')

  
    return <>
  
                    <primitive 
                    object={ house_8.scene } 
                    scale={ 5.01}
                    position={ [ 179.5, 0.0, -80 ] }
                    rotation-y={2 }

                     />

                    
    </>
}