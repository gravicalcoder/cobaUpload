import { useAnimations, useGLTF } from '@react-three/drei';

import React, { useEffect, useState } from 'react';

import Dexie from 'dexie';



export default function PlayerTiga() {

  /*
  const [loadedLady, setLoadedLady] = useState(null);

  useEffect(() => {

  
  const urlServer = 'https://5000-balubure-perpindahan-e0ujd327edc.ws-us104.gitpod.io/downloadVee/1olFgGWczEplewe-5ZAtdhGl8uevehkDn';
  const requestBody = {
    // Your request body
    token: {
      access_token: 'ya29.a0AfB_byDGCUPmGRnDdMf2VxFmMYOlSoOqIAdh06hV6BIjYwL26CQqRW_xtLs9b1wCGDSCdd7Zaw-ieSSvQhM3S10Ou8hmKxZ1ZF7vrUEuzpC1PEsMVHYLURQgNwTpaVOmpsiHX7dPCDWqxCohdCvmOJJjZYY-aCgYKAWsSARMSFQHsvYlsXVaNYa5LoiNRODe5CZZZMw0163',
      refresh_token: '1//06VMA0ji7riQaCgYIARAAGAYSNwF-L9Ir1K04KF6Ii5CrNARyCm7_2ewtJH50tNi7rf7Ty_c0ik_rJtIs7mr2fLNPnhDQY1D0SJY',
      scope: 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile',
      token_type: 'Bearer',
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE0NTc3ODIwNDU3MDQxNzQyMjEiLCJhdF9oYXNoIjoiYU1EdW56QnZWdkxkNV9rSzJMaVFXQSIsIm5hbWUiOiJhc2VwIHN1bXBlbmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZU41TnQxMDRkbjBDUnc2WVRXNTlxeHlHY0NWVUlUSm45T2ZKR1RUcVBnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6ImFzZXAiLCJmYW1pbHlfbmFtZSI6InN1bXBlbmEiLCJsb2NhbGUiOiJpZCIsImlhdCI6MTY5MTY2NTQ5NCwiZXhwIjoxNjkxNjY5MDk0fQ.rw94i2tolDVUVPNFTAH59nEP5xogAo3o9Fi1cUskvQQ44nHTrhM9yZ6JyLM5uVFvqLQPI13b63nLIPzVuI0lXHDb1jpSkkVTE8QM5MRztbbZVzUrim3_o4zwuHeCizywoQQqA-DOnOx5_T1AHNRmUtxkM12Vr_izJ2zWIp0_6JRBG_Q4h2uusTaBRLRVLBE2xHiBKyV0w_gQA5ROGmAOhPKkOlf9Ut7UmMm4dUZXk-2kG_RwS1lUD_YmxBa6tjLD_kgCKn5ZMPlKuMCIOAccJwxSwXfZWK36UzGDT-yFPaZ2lYQr-jmJreel9yl4oUgl_dpmTD3eNwuhSXsh1RmiCA',
      expiry_date: 1691669093723
    },
  };


 
  fetch(urlServer, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then(response => response.text())
    .then(responseText => {

      console.log(responseText)

      let glbBlob = null
      let blobUrl = null
      
      const buffer = new TextEncoder().encode(responseText);
      const binaryData = buffer.buffer;

        glbBlob = new Blob([binaryData], { type: 'model/gltf-binary' });
       blobUrl = URL.createObjectURL(glbBlob);
      //const loadedModel = useGLTF(blobUrl);

     // const loadedModel = useGLTF(responseText);
     //const loadedModel = useGLTF(glbBlob);

    // const loadedModel = useGLTF(blobUrl);
      
      //const loadedModel = useGLTF('./character/vee.glb');

      setLoadedLady(loadedModel);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []); // Empty dependency array means this effect runs once, similar to componentDidMount

return (


  <>
    {loadedLady && (
      <primitive
        object={loadedLady.scene}
        scale={6.5}
        position={[-10.5, -1, -8]}
      />
    )}
  </>
);

*/


const loadedLady = useGLTF('./character/vee.glb');

const animationsLady = useAnimations(loadedLady.animations, loadedLady.scene);
animationsLady.actions.idle.play();

// You might want to set the loaded model to state here
// if you want to render it in your component's return
      // Render the model
      return (
        <primitive
          object={loadedLady.scene}
          scale={6.5}
          position={[-10.5, -1, -8]}
        />
      );


      
     
    
}

    