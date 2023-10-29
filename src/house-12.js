import {  useGLTF  } from '@react-three/drei'


export default function House_12()
{
   
    const house_12 = useGLTF('./rumahe/wooden_house_from_jacowlan_polandlow_poly.glb')

  
    return <>
  
                    <primitive 
                    object={ house_12.scene } 
                    scale={ 6.01}
                    position={ [ 19.5, 36.0, -150 ] }
                    rotation-y={2 }

                     />

                    
    </>
}