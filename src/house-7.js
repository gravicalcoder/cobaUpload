import {  useGLTF  } from '@react-three/drei'


export default function House_7()
{
   
    const house_7 = useGLTF('./rumahe/cottage_house.glb')

  
    return <>
  
                    <primitive 
                    object={ house_7.scene } 
                    scale={ 10.01}
                    position={ [ 179.5, 10.0, -40 ] }
                    rotation-y={2 }

                     />

                    
    </>
}