import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'



export default function Vehicle_2()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    //const vehicle_2 = useGLTF('./vehicle/free_soviet_tram_x-series.glb')   
    const vehicle_2 = useGLTF('./vehicle/monster_4x4.glb')   


    return <>
           

                    <primitive 
                    object={ vehicle_2.scene } 
                    scale={ 0.03}
                    position={ [ 59.5, 2.5 , -60 ] }
                    />
    

    </>
}