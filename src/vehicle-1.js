import {  useAnimations, useGLTF, OrbitControls, useKeyboardControls  } from '@react-three/drei'



export default function Vehicle_1()
{

   // const motor = useGLTF('motorcycle.glb')   // satu folder dengan pemanggilnya
    const vehicle_1 = useGLTF('./vehicle/cafe_racer_motorcycle.glb')   


    return <>
           

                    <primitive 
                    object={ vehicle_1.scene } 
                    scale={ 4.0}
                    position={ [ 59.5, 2.5 , -30 ] }
                    />
    

    </>
}