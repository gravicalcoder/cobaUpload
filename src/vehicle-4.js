import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'



export default function Vehicle_3x()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    //const vehicle_2 = useGLTF('./vehicle/free_soviet_tram_x-series.glb')   
   // const vehicle_2 = useGLTF('./vehicle/monster_4x4.glb')   
   //const vehicle_3x = useGLTF('./vehicle/proton.glb')  
   const vehicle_3x = useGLTF('./vehicle/stylized_old_tram.glb')  


    return <>
           

                    <primitive 
                    object={ vehicle_3x.scene } 
                    scale={ 0.25}
                    position={ [ -10.5, 0.0 , -70 ] }
                    rotation-y={3.14/2 }
                    />
    

    </>
}