import {  useGLTF  } from '@react-three/drei'


export default function Fountain_2()
{
   
    const fountain_2 = useGLTF('./fountain/fountain_with_three_putts_brno_luzanky.glb')

  
    return <>
  
                    <primitive 
                    object={ fountain_2.scene } 
                    scale={ 1.01}
                    position={ [ 19.5, 3.0, -30 ] }
                    rotation-y={2 }

                     />

                    
    </>
}