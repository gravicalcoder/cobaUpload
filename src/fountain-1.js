import {  useGLTF  } from '@react-three/drei'


export default function Fountain_1()
{
   
    const fountain_1 = useGLTF('./fountain/fontaine_wallace.glb')

  
    return <>
  
                    <primitive 
                    object={ fountain_1.scene } 
                    scale={ 6.01}
                    position={ [ 19.5, 3.0, -10 ] }
                    rotation-y={2 }

                     />

                    
    </>
}