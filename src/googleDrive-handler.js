const cors = require('cors');
const { google } = require('googleapis');


const credentials = require('./credentials.json');

class GoogleDriveHandler {
  constructor() {
    const client_id = credentials.web.client_id;
    const client_secret = credentials.web.client_secret;
    const redirect_uris = credentials.web.redirect_uris;
    
    this.oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    this.SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive'];
  }

  async downloadFile(jsonObject, req, res) {
    if (jsonObject.token == null) return res.status(400).send('Token not found');
    this.oAuth2Client.setCredentials(jsonObject.token);

    const drive = google.drive({ version: 'v3', auth: this.oAuth2Client });
    const fileId = req.params.id;
    const namaFileGlb = dataFromClient.data;

    try {
      const response = await drive.files.get({ fileId: fileId, alt: 'media' }, { responseType: 'stream' });

     
      response.data
        .on('end', () => {
          console.log('File berhasil diunduh.');
          res.status(200).send('File berhasil diunduh');
        })
        .on('error', (err) => {
          console.error('Error while downloading file:', err);
          fs.unlinkSync(`./public/rumahe/${namaFileGlb}`);
          res.status(500).send('Error while downloading file');
        })
        .pipe(dest);
    } catch (err) {
      console.error('Error while downloading file:', err);
     
      res.status(500).send('Error while downloading file');
    }
  }
}

//module.exports = GoogleDriveHandler;

export default GoogleDriveHandler;
