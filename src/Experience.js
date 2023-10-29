import { Sky,  useGLTF, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {  InstancedRigidBodies, CylinderCollider, BallCollider, CuboidCollider, Debug, RigidBody, Physics } from '@react-three/rapier'
import {  useMemo, useEffect, useState,useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Player from './Player.js'
import PlayerDua from './Player-2.js'
import House from './glass-house.js'
import PlayerTiga from './ladies.js'
import ModelViewer from './drive.js'
import MobilKlasik from './mobil.js'
import Motorcycle from './motorcycle.js'
import Motorcycle_2 from './motorcycle_2.js'
import Pohon_1 from './pohon.js'
import Pohon_2 from './pohon-2.js'
import Pohon_3 from './pohon-3.js'
import Pohon_4 from './pohon-4.js'
import Pohon_5 from './pohon-5.js'
import Pohon_6 from './pohon-6.js'
import Pohon_7 from './pohon-7.js'
import Pohon_8 from './pohon-8.js'
import Pohon_9 from './pohon-9.js'
import Pohon_10 from './pohon-10.js'
import Pohon_11 from './pohon-11.js'
import Pohon_12 from './pohon-12.js'
import Pohon_13 from './pohon-13.js'
import Bush_1 from './bush-1.js'
import Bush_2 from './bush-2.js'
import Bush_3 from './bush-3.js'
import Bush_4 from './bush-4.js'
import Bush_5 from './bush-5.js'
import Bush_6 from './bush-6.js'

import House_1 from './house-1.js'
import House_2 from './house-2.js'
import House_3 from './house-3.js'
import House_4 from './house-4.js'
import House_5 from './house-5.js'
import House_6 from './house-6.js'
import House_7 from './house-7.js'
import House_8 from './house-8.js'
import House_9 from './house-9.js'
import House_10 from './house-10.js'
import House_11 from './house-11.js'
import House_12 from './house-12.js'



import { useControls } from 'leva'

import Grass from "./Grass"

import Vehicle_1 from "./vehicle-1.js"
import Vehicle_2 from "./vehicle-2.js"
import Vehicle_3 from "./vehicle-3.js"
import Vehicle_3x from "./vehicle-4.js"
import Vehicle_5 from "./vehicle-5.js"

import Fountain_1 from './fountain-1.js'
import Fountain_2 from './fountain-2.js'

import Animal_1 from './animal-1.js'
import Animal_2 from './animal-2.js'
import Animal_3 from './animal-3.js'
import Animal_4 from './animal-4.js'
import Animal_5 from './animal-5.js'
import Animal_6 from './animal-6.js'



/*
function LoadedObject() {
  const { scene } = useGLTF('vee.glb'); // Ubah menjadi path langsung tanpa menggunakan fetch

  return (
    <primitive
      object={scene}
      scale={6.5}
      position={[19.5, -1, 10]}
    />
  );
}
*/


var sudut = 0

export default function Experience()
{


  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [ 1, -0.2, 3 ] }
})


  const cubesCount = 1

  const cubes = useRef()

  const cubeTransforms = useMemo(() =>
  {
    const positions = []
    const rotations = []
    const scales = []

    for(let i = 0; i < cubesCount; i++)
    {
      positions.push([ (Math.random() - 0.5) * 8, 6 + i * 0.2, (Math.random() - 0.5) * 8 ])
      rotations.push([ Math.random(), Math.random(), Math.random() ])

      const scale = 0.2 + Math.random() * 0.8
      scales.push([ scale, scale, scale ])

    
    }

    return { positions, rotations, scales } 
  }, [])



  const hamburger = useGLTF('./character/hamburger.glb')  // posisi di public

  const dudukan = useGLTF('./character/dudukan-lampu-Body.glb')

  const tuyul = useGLTF('./character/model.gltf')


  //const [ hitSound ] = useState(() => new Audio('./hit.mp3'))
    
    const collisionEnter = () =>
    {
        //console.log('collision!')
        /*
        hitSound.currentTime = 0
       hitSound.volume = Math.random()
        hitSound.play()
        */
    }
    const cube = useRef()
    const twister = useRef()
    useFrame((state) =>
    {
      const time = state.clock.getElapsedTime()

      const angle = time * 0.5
      const x = Math.cos(angle) * 2
      const z = Math.sin(angle) * 2
      twister.current.setNextKinematicTranslation({ x: x, y:  -0.5, z: z })
  
      //console.log(time)
      const eulerRotation = new THREE.Euler(0, time * 3, 0)
      const quaternionRotation = new THREE.Quaternion()
       quaternionRotation.setFromEuler(eulerRotation)
       twister.current.setNextKinematicRotation(quaternionRotation)
      

    })

    const cubeJump = () =>
    {
      const mass = cube.current.mass()
      //console.log(mass)
        //console.log(cube.current)
        cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 })
        //cube.current.applyTorqueImpulse({ x: 0, y: 1, z: 0 })
        cube.current.applyTorqueImpulse({ x: Math.random() - 0.5, y: Math.random() - 0.5, z: Math.random() - 0.5 })
    }


    const meshRef = useRef()

    const balokJump = () =>
    {
      
       /***************************************** */
        let angle = sudut + ( Math.PI / 6 );
        /***************************************** */
       
        sudut = angle

        const eulerRotation = new THREE.Euler(0, angle , 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        meshRef.current.setNextKinematicRotation(quaternionRotation)
        console.log('ke klik')
    }



  

    const [loadObject, setLoadObject] = useState(false);
    const [loadMotor, setLoadMotor] = useState(false);
    const [loadMotor_2, setLoadMotor_2] = useState(false);
    const [loadMobil, setLoadMobil] = useState(false);
    const [loadPohon, setLoadPohon] = useState(false);
    const [loadPohon_2, setLoadPohon_2] = useState(false);
    const [loadPohon_3, setLoadPohon_3] = useState(false);
    const [loadPohon_4, setLoadPohon_4] = useState(false);
    const [loadPohon_5, setLoadPohon_5] = useState(false);
    const [loadPohon_6, setLoadPohon_6] = useState(false);
    const [loadPohon_7, setLoadPohon_7] = useState(false);
    const [loadPohon_8, setLoadPohon_8] = useState(false);
    const [loadPohon_9, setLoadPohon_9] = useState(false);
    const [loadPohon_10, setLoadPohon_10] = useState(false);
    const [loadPohon_11, setLoadPohon_11] = useState(false);
    const [loadPohon_12, setLoadPohon_12] = useState(false);
    const [loadPohon_13, setLoadPohon_13] = useState(false);

    const [loadBush_1, setLoadBush_1] = useState(false);
    const [loadBush_2, setLoadBush_2] = useState(false);
    const [loadBush_3, setLoadBush_3] = useState(false);
    const [loadBush_4, setLoadBush_4] = useState(false);
    const [loadBush_5, setLoadBush_5] = useState(false);
    const [loadBush_6, setLoadBush_6] = useState(false);

    const [loadHouse_1, setLoadHouse_1] = useState(false);
    const [loadHouse_2, setLoadHouse_2] = useState(false);
    const [loadHouse_3, setLoadHouse_3] = useState(false);
    const [loadHouse_4, setLoadHouse_4] = useState(false);
    const [loadHouse_5, setLoadHouse_5] = useState(false);
    const [loadHouse_6, setLoadHouse_6] = useState(false);
    const [loadHouse_7, setLoadHouse_7] = useState(false);
    const [loadHouse_8, setLoadHouse_8] = useState(false);
    const [loadHouse_9, setLoadHouse_9] = useState(false);
    const [loadHouse_10, setLoadHouse_10] = useState(false);
    const [loadHouse_11, setLoadHouse_11] = useState(false);
    const [loadHouse_12, setLoadHouse_12] = useState(false);


    const [loadFountain_1, setLoadFountain_1] = useState(false);
    const [loadFountain_2, setLoadFountain_2] = useState(false);

    const [loadGrass, setLoadGrass] = useState(false);

    const [loadVehicle_1, setLoadVehicle_1] = useState(false);
    const [loadVehicle_2, setLoadVehicle_2] = useState(false);
    const [loadVehicle_3, setLoadVehicle_3] = useState(false);
    const [loadVehicle_4, setLoadVehicle_4] = useState(false);
    const [loadVehicle_5, setLoadVehicle_5] = useState(false);

    const [loadAnimal_1, setLoadAnimal_1] = useState(false);
    const [loadAnimal_2, setLoadAnimal_2] = useState(false);
    const [loadAnimal_3, setLoadAnimal_3] = useState(false);
    const [loadAnimal_4, setLoadAnimal_4] = useState(false);
    const [loadAnimal_5, setLoadAnimal_5] = useState(false);
    const [loadAnimal_6, setLoadAnimal_6] = useState(false);
    
    

    
    

    /*
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoadObject(true);
      }, 5000); // Delay of 10 seconds
  
      return () => clearTimeout(timeout);
    }, []);
    */

 
    return (
    <>

        <Sky />

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        {/* <color args={ [ '#00A1F3' ] } attach="background" />  */} 

       

        <Physics gravity={ [ 0, -9.8, 0 ] } >
             <Debug /> 
            <RigidBody 
             onClick={() => setLoadMobil(true)}
            colliders="ball">
                 <mesh castShadow position={ [ -2, 4, 0 ] }>
                     <sphereGeometry />
                     <meshStandardMaterial color="orange" />
                 </mesh>
                 </RigidBody>


                 <RigidBody gravityScale={ 2 } restitution={ 0 } >
                      <mesh castShadow position={ [ 5, 8, 0 ] }  >
                             <boxGeometry  args={ [ 4, 2, 1 ] } />
                             <meshStandardMaterial color="mediumpurple" />
                        </mesh>
                        <mesh castShadow position={ [ 5, 8, 7 ] }>
                              <boxGeometry args={ [ 1, 1, 1 ] } />
                              <meshStandardMaterial color="mediumpurple" />
                     </mesh>
                </RigidBody>


             <RigidBody type="fixed"  restitution={ 1 } friction={ 0.7 } >
                <mesh receiveShadow position-y={ - 1.25 }>
                     <boxGeometry args={ [ 1040, 0.5, 1040 ] } />
                     <meshStandardMaterial color="greenyellow" />
                 </mesh>
              </RigidBody>

          

                <RigidBody 
                  ref={ cube } 
                  position={ [ 1.5, 2, 0 ] } 
                  
                  gravityScale={ 1 }
                  friction={ 0.5 }
                  colliders={ false }
                  //onCollisionEnter={ collisionEnter }
                  //onCollisionExit={ () => { console.log('exit') } }
                  //onSleep={ () => { console.log('sleep') } }
                  //onWake={ () => { console.log('wake') } }
                  >
                    
                     <mesh castShadow  onClick={ cubeJump }>
                       <boxGeometry />
                      <meshStandardMaterial color="mediumpurple" />
                     </mesh>
                     <CuboidCollider mass={ 2 } args={ [ 0.5, 0.5, 0.5 ] } />
                </RigidBody>

                <RigidBody
                  ref={ twister }
                   position={ [ 0, - 0.8, 0 ] }
                    friction={ 0 }
                    type="kinematicPosition"
                >
                    <mesh castShadow scale={ [ 0.4, 0.4, 8 ] }>
                      <boxGeometry />
                      <meshStandardMaterial color="red" />
                   </mesh>
                </RigidBody>

                <RigidBody  position={ [ 20, 32, 0 ] } 

                    onClick={() => setLoadMotor(true)}
                >
                    <primitive object={ hamburger.scene } scale={ 0.25 } />
                     <CylinderCollider args={ [ 0.5, 1.25 ] } /> 
                  </RigidBody>


                  <RigidBody  
                      position={ [ -22 , 11, 0 ] } 
                      //onClick={ memanggil }
                      onClick={() => setLoadObject(true)}
                      >
                    <primitive object={ dudukan.scene } scale={ 0.025 } />
                     <CuboidCollider args={ [ 0.3, 0.25, 0.5 ] } /> 
                  </RigidBody>

                  <RigidBody  position={ [ -22 , 11, 30 ] } 
                    onClick={() => setLoadMotor_2(true)}
                  >
                    <primitive object={ tuyul.scene } scale={ 5.5} />
                     <CuboidCollider args={ [ 1, 1, 2 ] } /> 
                  </RigidBody>


                  <RigidBody type="fixed">
                     <CuboidCollider 
                          args={ [ 5,8, 0.5 ] } 
                          position={ [ 0, 4, 5.5 ] } 
                         
                          />
                     <CuboidCollider args={ [ 5, 8, 0.5 ] } position={ [ 0, 4, - 5.5 ] } />
                     <CuboidCollider args={ [ 0.5, 8, 5 ] } position={ [ 5.5, 4, 0 ] } />
                     <CuboidCollider args={ [ 0.5, 8, 5 ] } position={ [ - 5.5, 4, 0 ] } />
                  </RigidBody>


                  <RigidBody
                  ref={ meshRef }
                   position={ [ -8, - 0.8, 0 ] }
                    friction={ 0 }
                    type="kinematicPosition"
                    onClick={ balokJump }
                     >
                    <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
                       <boxGeometry />
                       <meshStandardMaterial color="red" />
                   </mesh>
                </RigidBody>

                <RigidBody
                
                   position={ [ -21, - 0.8, 20 ] }
                   onClick={() => setLoadPohon_2(true)}
                     >
                    <mesh castShadow scale={ [ 2, 1, 3 ] }>
                       <boxGeometry />
                       <meshStandardMaterial color="red" />
                   </mesh>
                </RigidBody>

                <RigidBody
                
                position={ [ -24, - 0.8, 20 ] }
                onClick={() => setLoadPohon_3(true)}
                  >
                 <mesh castShadow scale={ [ 2, 2, 3 ] }>
                    {/*  <boxGeometry /> */}
                    <torusKnotGeometry />
                    <meshStandardMaterial color="brown" />
                </mesh>
             </RigidBody>

                <RigidBody
                
                position={ [ -18, - 0.8, 20 ] }
                onClick={() => setLoadPohon(true)}
                  >
                 <mesh castShadow scale={ [ 0.4, 0.4, 7 ] }>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
             </RigidBody>


                <InstancedRigidBodies
                positions={ cubeTransforms.positions }
                rotations={ cubeTransforms.rotations }
                scales={ cubeTransforms.scales }
                >
                   <instancedMesh  ref={ cubes }  castShadow receiveShadow args={[ null, null, cubesCount ]} >

                      <boxGeometry />
                     <meshStandardMaterial color="tomato" />
                  </instancedMesh>
                </InstancedRigidBodies>

                <Suspense
                fallback={ <mesh 
                  position-y={ 0.5 } 
                  scale={ [ 2, 3, 2 ] }>
                    <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } />
                    <meshBasicMaterial 
                    wireframe color="red" 
                    /></mesh> }
                > <Player /> </Suspense>
 <Suspense><PlayerDua />  </Suspense>
                 {/* <Mobil />  */}
                 <House /> 

                 <RigidBody
                
                position={ [ -24, - 0.8, 40 ] }
                onClick={() => setLoadPohon_4(true)}
                  >
                 <mesh castShadow scale={ [ 1, 1, 1 ] }>
                    {/*  <boxGeometry /> */}
                    <torusKnotGeometry />
                    <meshStandardMaterial color="brown" />
                </mesh>
             </RigidBody>

             <RigidBody
                
                position={ [ -24, - 0.8, 50 ] }
                onClick={() => setLoadPohon_5(true)}
                  >
                 <mesh castShadow scale={ [ 2, 2, 2 ] }>
                    {/*  <boxGeometry /> */}
                    <torusKnotGeometry />
                    <meshStandardMaterial color="brown" />
                </mesh>
             </RigidBody>

             <RigidBody
                
                position={ [ -24, 8, 60 ] }
                onClick={() => setLoadPohon_6(true)}
                  >
                 <mesh castShadow scale={ [ 1, 4, 2 ] }>
                    {/*  <boxGeometry /> */}
                    <coneGeometry />
                    <meshStandardMaterial color="blue" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -24, 8, 70 ] }
                onClick={() => setLoadPohon_7(true)}
                  >
                 <mesh castShadow scale={ [ 2, 5, 2  ] }>
                    {/*  <boxGeometry /> */}
                    <cylinderGeometry />
                    <meshStandardMaterial color="purple" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -24, 8, 80 ] }
                onClick={() => setLoadPohon_8(true)}
                  >
                 <mesh castShadow scale={ [2, 2, 2, 100 ] }>
                    {/*  <boxGeometry /> */}
                    <torusGeometry />
                    <meshStandardMaterial color="purple" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -24, 8, 90 ] }
                onClick={() => setLoadPohon_9(true)}
                  >
                 <mesh castShadow scale={ [2, 2, 2] }>
                     <boxGeometry />
                     {/*  <torusGeometry /> */}
                    <meshStandardMaterial color="purple" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -24, 8, 100 ] }
                onClick={() => setLoadPohon_10(true)}
                  >
                 <mesh castShadow scale={ [2, 2, 2] }>
                    {/* <boxGeometry />*/}
                       <torusKnotGeometry /> 
                    <meshStandardMaterial color="purple" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -24, 8, 100 ] }
                onClick={() => setLoadPohon_11(true)}
                  >
                 <mesh castShadow scale={ [2, 2, 2] }>
                    {/* <boxGeometry />*/}
                       <coneGeometry /> 
                    <meshStandardMaterial color="purple" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -44, 8, 20 ] }
                onClick={() => setLoadPohon_12(true)}
                  >
                 <mesh castShadow scale={ [2, 2, 2] }>
                     <boxGeometry />
                      {/* <coneGeometry />  */}
                    <meshStandardMaterial color="green" />
                </mesh>
             </RigidBody>
                 
                 
             <RigidBody
                position={ [ -44, 8, 30 ] }
                onClick={() => setLoadPohon_13(true)}
                  >
                 <mesh castShadow scale={ [2, 7, 2] }>
                     <coneGeometry />
                      {/* <coneGeometry />  */}
                    <meshStandardMaterial color="green" />
                </mesh>
             </RigidBody>

                   
             <RigidBody
                position={ [ -54, 8, 20 ] }
                onClick={() => setLoadBush_1(true)}
                  >
                 <mesh castShadow scale={ [2, 1, 2] }>
                    {/* <coneGeometry /> */}
                     <boxGeometry />
                      {/* <coneGeometry />  */}
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -54, 8, 30 ] }
                onClick={() => setLoadBush_2(true)}
                  >
                 <mesh castShadow scale={ [2, 5, 2] }>
                     <coneGeometry />
                    {/* <boxGeometry /> */}
                      {/* <coneGeometry />  */}
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>

             <RigidBody
                position={ [ -54, 8, 40 ] }
                onClick={() => setLoadBush_3(true)}
                  >
                 <mesh castShadow scale={ [2, 1, 2] }>
                    {/* <coneGeometry /> */}
                    {/* <boxGeometry /> */}
                      <torusKnotGeometry /> 
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>

             
             <RigidBody
                position={ [ -54, 8, 50 ] }
                onClick={() => setLoadBush_4(true)}
                  >
                 <mesh castShadow scale={ [1, 1, 1, 50] }>
                    {/* <coneGeometry /> */}
                    {/* <boxGeometry /> */}
                      <torusGeometry /> 
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 50 ] }
                onClick={() => setLoadBush_5(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                    {/* <boxGeometry /> */}
                     {/* <torusGeometry />   */}
                      <cylinderGeometry />
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>


             <RigidBody
             position={ [ -54, 8, 70 ] }
                onClick={() => setLoadBush_6(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                     <coneGeometry /> 
                    {/* <boxGeometry /> */}
                     {/* <torusGeometry />   */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="olive" />
                </mesh>
             </RigidBody>



             <RigidBody
             position={ [ -54, 8, 90 ] }
                onClick={() => setLoadHouse_1(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     <boxGeometry /> 
                     {/* <torusGeometry />   */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="olive" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 100 ] }
                onClick={() => setLoadHouse_2(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/*<boxGeometry /> */}
                     { <torusKnotGeometry />  }
                     {/* <torusGeometry /> */ }
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="olive" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 110 ] }
                onClick={() => setLoadHouse_3(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/*<boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     { <torusGeometry />  }
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="olive" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 130 ] }
                onClick={() => setLoadHouse_4(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/*<boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/*  <torusGeometry /> */ }
                     {<cylinderGeometry />  }
                    <meshStandardMaterial color="olive" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 130 ] }
                onClick={() => setLoadHouse_5(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/*<boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     { <torusGeometry />  }
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 160 ] }
                onClick={() => setLoadHouse_6(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    { <coneGeometry /> }
                     {/*<boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -54, 8, 180 ] }
                onClick={() => setLoadHouse_7(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    { <coneGeometry /> }
                     {/*<boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="black" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -44, 8, 180 ] }
                onClick={() => setLoadHouse_8(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     { <boxGeometry /> }
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="black" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ -24, 8, 180 ] }
                onClick={() => setLoadHouse_9(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                   <torusKnotGeometry />  
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="black" />
                </mesh>
             </RigidBody>


             <RigidBody
             position={ [ -10, 8, 180 ] }
                onClick={() => setLoadHouse_10(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                   {/* <torusKnotGeometry />  */}
                      <torusGeometry />  
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="black" />
                </mesh>
             </RigidBody>


             <RigidBody
             position={ [ 10, 8, 180 ] }
                onClick={() => setLoadHouse_11(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                   {/* <torusKnotGeometry />  */}
                      {/* <torusGeometry />  */}  
                      <cylinderGeometry /> 
                    <meshStandardMaterial color="black" />
                </mesh>
             </RigidBody>

             
             <RigidBody
             position={ [ 10, 8, 160 ] }
                onClick={() => setLoadHouse_12(true)}
                  >
                 <mesh castShadow scale={ [3, 2, 1 ] }>
                     <coneGeometry /> 
                     {/* <boxGeometry /> */}
                   {/* <torusKnotGeometry />  */}
                      {/* <torusGeometry />  */}  
                      {/* <cylinderGeometry /> */}
                    <meshStandardMaterial color="aqua" />
                </mesh>
             </RigidBody>






             <RigidBody
                position={ [ 4, 8, -16 ] }
                onClick={() => setLoadGrass(true)}
                  >
                 <mesh castShadow scale={ [3, 10, 1 ] }>
                    {/* <coneGeometry /> */}
                     {<boxGeometry /> }
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 4, 8, -26 ] }
                onClick={() => setLoadVehicle_1(true)}
                  >
                 <mesh castShadow scale={ [3, 10, 1 ] }>
                    { <coneGeometry /> }
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 4, 8, -46 ] }
                onClick={() => setLoadVehicle_2(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                     { <torusKnotGeometry />  }
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 4, 8, -66 ] }
                onClick={() => setLoadVehicle_3(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     { <torusGeometry />  }
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 4, 8, -86 ] }
                onClick={() => setLoadVehicle_4(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1 ] }>
                    {/* <coneGeometry /> */}
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     { <cylinderGeometry />  }
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 4, 8, -96 ] }
                onClick={() => setLoadVehicle_4(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { <coneGeometry /> }
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="#006400" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 14, 8, -96 ] }
                onClick={() => setLoadFountain_1(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { <coneGeometry /> }
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="yellow" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 14, 8, -76 ] }
                onClick={() => setLoadFountain_2(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { /* <coneGeometry /> */}
                     { <boxGeometry /> }
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="yellow" />
                </mesh>
             </RigidBody>


             <RigidBody
             position={ [ 34, 8, -76 ] }
                onClick={() => setLoadAnimal_1(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    {  <coneGeometry />}
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="magenta" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 34, 8, -96 ] }
                onClick={() => setLoadAnimal_2(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { /* <coneGeometry />  */}
                     { <boxGeometry />  }
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="magenta" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 34, 8, -116 ] }
                onClick={() => setLoadAnimal_3(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { /* <coneGeometry />  */}
                     {/* <boxGeometry />  */}
                     { <torusKnotGeometry />  }
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="magenta" />
                </mesh>
             </RigidBody>

             
             <RigidBody
             position={ [ 34, 8, -136 ] }
                onClick={() => setLoadAnimal_4(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { /* <coneGeometry />  */}
                     {/* <boxGeometry />  */}
                     {/* <torusKnotGeometry /> */ }
                     { <torusGeometry />  }
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="magenta" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 34, 8, -156 ] }
                onClick={() => setLoadAnimal_5(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    { /* <coneGeometry />  */}
                     {/* <boxGeometry />  */}
                     {/* <torusKnotGeometry /> */ }
                     {/* <torusGeometry />  */ }
                     { <cylinderGeometry />  }
                    <meshStandardMaterial color="magenta" />
                </mesh>
             </RigidBody>

             <RigidBody
             position={ [ 54, 8, -76 ] }
                onClick={() => setLoadAnimal_6(true)}
                  >
                 <mesh castShadow scale={ [1.5, 1, 1.5 ] }>
                    {  <coneGeometry />}
                     {/* <boxGeometry /> */}
                     {/* <torusKnotGeometry />  */}
                     {/* <torusGeometry />  */}
                     {/* <cylinderGeometry />  */}
                    <meshStandardMaterial color="red" />
                </mesh>
             </RigidBody>
                 
                 
                 
               

                  {/* loadObject && <LoadedObject />*/}

                   {loadObject && <Suspense

                                   
                   
                                    ><PlayerTiga /> </Suspense> }

                  {loadMotor && <Suspense ><Motorcycle /> </Suspense> }
                  {loadMotor_2 && <Suspense ><Motorcycle_2 /> </Suspense> }
                  {loadMobil && <Suspense ><MobilKlasik 
                 
                  /> </Suspense> }

                  {loadPohon && <Suspense ><Pohon_1 /> </Suspense> }
                  {loadPohon_2 && <Suspense ><Pohon_2 /> </Suspense> }
                  {loadPohon_3 && <Suspense ><Pohon_3 /> </Suspense> }
                  {loadPohon_4 && <Suspense ><Pohon_4 /> </Suspense> }
                  {loadPohon_5 && <Suspense ><Pohon_5 /> </Suspense> }
                  {loadPohon_6 && <Suspense ><Pohon_6 /> </Suspense> }
                  {loadPohon_7 && <Suspense ><Pohon_7 /> </Suspense> }
                  {loadPohon_8 && <Suspense ><Pohon_8 /> </Suspense> }
                  {loadPohon_9 && <Suspense ><Pohon_9 /> </Suspense> }
                  {loadPohon_10 && <Suspense ><Pohon_10 /> </Suspense> }
                  {loadPohon_11 && <Suspense ><Pohon_11 /> </Suspense> }
                  {loadPohon_12 && <Suspense ><Pohon_12/> </Suspense> }
                  {loadPohon_13 && <Suspense ><Pohon_13/> </Suspense> }

                  {loadBush_1 && <Suspense ><Bush_1/> </Suspense> }
                  {loadBush_2 && <Suspense ><Bush_2/> </Suspense> }
                  {loadBush_3 && <Suspense ><Bush_3/> </Suspense> }
                  {loadBush_4 && <Suspense ><Bush_4/> </Suspense> }
                  {loadBush_5 && <Suspense ><Bush_5/> </Suspense> }
                  {loadBush_6 && <Suspense 
                    fallback={
                               <mesh position-y={ 0.5 } scale={ [ 2, 3, 2 ] }>
                               <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } />
                             <meshBasicMaterial wireframe color="red" />
                              </mesh>
                        }
                  ><Bush_6/> </Suspense> }

                  {loadHouse_1 && <Suspense ><House_1/> </Suspense> }
                  {loadHouse_2 && <Suspense ><House_2/> </Suspense> }
                  {loadHouse_3 && <Suspense ><House_3/> </Suspense> }

                  {loadHouse_4 && <Suspense ><House_4/> </Suspense> }
                  {loadHouse_5 && <Suspense ><House_5/> </Suspense> }
                  {loadHouse_6 && <Suspense ><House_6/> </Suspense> }
                  {loadHouse_7 && <Suspense ><House_7/> </Suspense> }
                  {loadHouse_8 && <Suspense ><House_8/> </Suspense> }
                  {loadHouse_9 && <Suspense ><House_9/> </Suspense> }
                  {loadHouse_10 && <Suspense ><House_10/> </Suspense> }
                  {loadHouse_11 && <Suspense ><House_11/> </Suspense> }
                  {loadHouse_12 && <Suspense ><House_12/> </Suspense> }


                  {loadGrass &&  <Suspense fallback={null}>
                                                    <Grass />  
                                                    </Suspense> }

                                     {/*  <Suspense><ModelViewer /> </Suspense> */}

                                     {/* loadObject &&   <Suspense
                                         
                                      fallback={ <mesh 
                                        position-y={ 0.5 } 
                                        scale={ [ 2, 3, 2 ] }>
                                          <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } />
                                          <meshBasicMaterial 
                                          wireframe color="red" 
                                          /></mesh> }
                                          
                                      
                                      ><MobilKlasik /> </Suspense> */}

                  {loadVehicle_1 && <Suspense ><Vehicle_1/> </Suspense> }
                  {loadVehicle_2 && <Suspense ><Vehicle_2/> </Suspense> }
                  {loadVehicle_3 && <Suspense ><Vehicle_3/> </Suspense> }
                  {loadVehicle_4 && <Suspense ><Vehicle_3x/> </Suspense> }
                  {loadVehicle_5 && <Suspense ><Vehicle_5/> </Suspense> }

                  {loadFountain_1 && <Suspense ><Fountain_1/> </Suspense> }
                  {loadFountain_2 && <Suspense ><Fountain_2/> </Suspense> }

                  {loadAnimal_1 && <Suspense ><Animal_1/> </Suspense> }
                  {loadAnimal_2 && <Suspense ><Animal_2/> </Suspense> }
                  {loadAnimal_3 && <Suspense ><Animal_3/> </Suspense> }
                  {loadAnimal_4 && <Suspense ><Animal_4/> </Suspense> }
                  {loadAnimal_5 && <Suspense ><Animal_5/> </Suspense> }
                  {loadAnimal_6 && <Suspense ><Animal_6/> </Suspense> }
  

        </Physics>

    </>
    )
}
