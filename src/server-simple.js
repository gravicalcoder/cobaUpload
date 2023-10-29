const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require("fs");
const formidable = require('formidable');
const credentials = require('./credentials.json');


//const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter');
//const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter.js');

//const { GLTFExporter } = import('three/examples/jsm/exporters/GLTFExporter.js');
//import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';





const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);


const SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive']

const corsOptions = {
  //origin: 'https://3000-balubure-perpindahan-e0ujd327edc.ws-us102.gitpod.io' // Ganti dengan URL ReactJS Anda
 //origin: 'http://localhost:3000'
 origin: '*',
 //origin: 'https://lets-run.vercel.app'
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*'); // Set to specific origin or '*' for any
 // res.header('Access-Control-Allow-Origin', 'https://lets-run.vercel.app');
 res.header('Access-Control-Allow-Origin', 'https://3000-balubure-perpindahan-e0ujd327edc.ws-us103.gitpod.io');
  res.header('Access-Control-Allow-Headers: ', 'Content-Type'); 
 // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 // res.header('Access-Control-Allow-Credentials', true); // If you need to include credentials
  next();
});
*/


app.get('/', (req, res) => res.send(' API Running'));

/*

app.post('/downloadVee/:id', (req, res) => {

  const dataFromClient = req.body;

  oAuth2Client.setCredentials(dataFromClient.token);
    if (dataFromClient.token == null) return res.status(400).send('Token not found');

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb =  dataFromClient.data;
 


        drive.files.get(
          { fileId: fileId, alt: 'media' },
          { responseType: 'stream' },
    
             res.setHeader('Content-disposition', `attachment; filename=${namaFileGlb}`);
    res.setHeader('Content-type', 'application/octet-stream');

    response.data
      .on('data', (chunk) => {
        res.write(chunk);
      })
      .on('end', () => {
        res.end();
      })
      .on('error', (err) => {
        console.error('Error while streaming file:', err);
        res.status(500).send('Error while streaming file');
      });

        );
        
       
});

*/
app.post('/downloadVee/:id', async (req, res) => {
    const dataFromClient = req.body;
  
    if (dataFromClient.token == null) {
      return res.status(400).send('Token not found');
    }

try {
    //const oAuth2Client = /* Initialize your OAuth2 client here */;

    oAuth2Client.setCredentials(dataFromClient.token);

    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb = 'sieta.glb';

    const response = await drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    ///res.setHeader('Content-Type', 'application/octet-stream');
   // res.setHeader('Content-Disposition', 'attachment; filename="model.glb"');
    res.setHeader('Content-Type', 'model/gltf-binary');
    //response.data.pipe(res);

    response.data.pipe(res);

    console.log('selesai dikirim')

    /*
    const glbData = await response.data


    res.setHeader('Content-Disposition', 'attachment; filename="model.glb"');
    res.setHeader('Content-Type', 'model/gltf-binary');
    res.send(glbData);
    */
/*
   // res.setHeader('Content-Type', 'application/octet-stream');
   res.setHeader('Content-Disposition', `attachment; filename=${namaFileGlb}`);
   res.setHeader('Content-Type', 'model/gltf-binary'); // Use the correct content type


   

   
   

    response.data


    
 
    
      .on('data', (chunk) => {
        res.write(chunk);

        console.log('data ditulis')
      })
      .on('end', () => {
        res.end();
        console.log('data selesai ditulis')
        console.log(response.data)
      })
      .on('error', (err) => {
        console.error('Error while streaming file:', err);
        res.status(500).send('Error while streaming file');
      })
      .pipe(res);
      */
    

      /*
      oAuth2Client.setCredentials(dataFromClient.token);

      const drive = google.drive({ version: 'v3', auth: oAuth2Client });
      const fileId = req.params.id;
      const namaFileGlb = 'sieta.glb';
  
      const response = await drive.files.get(
        { fileId: fileId, alt: 'media' },
        { responseType: 'stream' }
      );

      res.setHeader('Content-Disposition', `attachment; filename=${namaFileGlb}`);
      res.setHeader('Content-Type', 'model/gltf-binary'); // Use the correct content type
  
      response.data
        .on('data', (chunk) => {
          res.write(chunk);
        })
        .on('end', () => {
          res.end();
        })
        .on('error', (err) => {
          console.error('Error while streaming file:', err);
          res.status(500).send('Error while streaming file');
        })
        .pipe(res);

        */

      
      
  } catch (error) {
    console.error('Error while downloading file:', error);
    res.status(500).send('Error while downloading file');
  }
});











const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started ${PORT}`));