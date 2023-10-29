import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'



export default function Vehicle_2()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    //const vehicle_2 = useGLTF('./vehicle/free_soviet_tram_x-series.glb')   
   // const vehicle_2 = useGLTF('./vehicle/monster_4x4.glb')   
   const vehicle_3 = useGLTF('./vehicle/proton.glb')  


    return <>
           

                    <primitive 
                    object={ vehicle_3.scene } 
                    scale={ 4.5}
                    position={ [ -10.5, -1.0 , -30 ] }
                    rotation-y={3.14/2 }
                    />
    

    </>
}