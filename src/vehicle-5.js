import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'




export default function Vehicle_5()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    //const vehicle_2 = useGLTF('./vehicle/free_soviet_tram_x-series.glb')   
   // const vehicle_2 = useGLTF('./vehicle/monster_4x4.glb')   
   //const vehicle_3x = useGLTF('./vehicle/proton.glb')  
   const vehicle_5 = useGLTF('./vehicle/uaz-452.glb')  


    return <>
           

                    <primitive 
                    object={ vehicle_5.scene } 
                    scale={ 1.25}
                    position={ [ -10.5, 0.0 , -70 ] }
                    rotation-y={3.14/2 }
                    />
    

    </>
}