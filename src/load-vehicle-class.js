const request = require('superagent');
const RequestHandler = require('./requestHandler-vehicle');

class Load {
  constructor() {
    this.url = 'http://localhost:5000/readDrive';
    this.requestBody = {
      "token": {
        access_token: 'ya29.a0AfB_byAVyXJSQfqUWvt0qkPoceInv2MFnHdOQCqrMhzmT8hj82XaA-KzIQeQbvdYWlg22QtjXl4hdXvDaimv5MXi_ywZ4xW4_oWnWXOA3wb2EZ1BAKmFPkh6858jOjf4DbdWEFmEMvrarJdU4jaV8-x7idc1aCgYKAdoSARISFQHsvYlszB-V7LIpcnRcjtMKjs0s-w0163',
        refresh_token: '1//06Lymgz-5GK_jCgYIARAAGAYSNwF-L9IrLYK1K_8X2AhOoIMuyplW32tkTNEEb4UK368X4j4rlLWkUhbfiaCZcixCaTZAgh1ESJ0',
        scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTc5NzUzMTkwMjQzNjUxNTU1MjAiLCJhdF9oYXNoIjoiWjF1S0VrVUQyd3JQN0Y0YTQ1aHhzZyIsIm5hbWUiOiJBa3VnYWsgQmF3YWFsYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRkdVJtMW02cllyaDFpTmVOM1VvVmR1ZVFSXzNDUV9sQ0E3N3dEdlY0R0RFQT1zOTYtYyIsImdpdmVuX25hbWUiOiJBa3VnYWsiLCJmYW1pbHlfbmFtZSI6IkJhd2FhbGEiLCJsb2NhbGUiOiJpZCIsImlhdCI6MTY5MTY2NDkzOCwiZXhwIjoxNjkxNjY4NTM4fQ.tphr6M96bEQg7whZ8uCxqgGM-xu-ovW81_iNFmMBD70B1-w8ewmqYJO9K5G0rBht4NXZlkta9V0ruKO1IDdwvvevFD8gzWrO-HhTqEjrux7kzt0QB-bM8AQHvDKpPyFOuj1rlu7lgpzvG4PCDOu1qmTtoWlaJYxeCDZY-KK03HBifrlLnkrleGWm6qkbn691JxIfp7O0heahhItQLatwOnACkbJDI46-VSxWF705TEFXZnnYyriojQDGD-9bl_oLIKV5FeWb6hk_gA8lX1LwJcJXOgGhmf7ibxKcTARLugvuKoHI3drOnsyHbMNxrtrKqQxF1RwPmumOIgDeLkKvwQ',
        expiry_date: 1691668537432
      },
    };
  }

  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async synchronousLoop(isiJson) {
    for (const item of isiJson) {
      const url = item.id;
      const data = item.name;

      new RequestHandler(url, data).sendData();
      await this.delay(1000); // Wait for 1 second before the next iteration
    }
  }

  start() {
    const rawJsonText = JSON.stringify(this.requestBody);
    request
      .post(this.url)
      .set('Content-Type', 'application/json')
      .send(rawJsonText)
      .then(response => {
        console.log('Response:', response.body);
        this.synchronousLoop(response.body);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
}

module.exports = Load;