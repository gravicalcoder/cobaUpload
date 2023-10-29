const request = require('superagent');

class RequestHandler {
  constructor(baseUrl, data) {
    this.completeUrl = 'http://localhost:5000/downloadTrees/'+baseUrl;
    this.requestBody = {
      token: {
        access_token: 'ya29.a0AfB_byDbZet-Fvr4UjE1jNKXDZtufHPZhhRRIsC_ayAKLcCLPMSne97jttNzid5GU31uTMJll8bIByNBBGe-ROaUpMSZKMpGLiimF5n6VtwmphGX0Mo9tjFjW3lCPAXpjzL7PuVlW8O6ZKam48zRKiZhpCExaCgYKAdASARASFQHsvYlsSbFMaHkgvv_IcAxZg3Iepw0163',
        refresh_token: '1//06Tpu26ANdP4jCgYIARAAGAYSNwF-L9IrSM9av4cyei-ONDWZVxvSeWB-uLbBzcLkCnCh2QQR3vwUBi0fh1iceXvgj9SrvcWhLk4',
        scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.profile',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTEyMzU1MTM1MTU3MDQzMzAxMTQiLCJhdF9oYXNoIjoidVRjTlY3alhkR1VSSzQ5eGNxbndUZyIsIm5hbWUiOiJ0cmVlZCBlcG9zaXQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZWpaSTVnZkRZS1ZhZWx2eUZ1a1VoRzR3Ry1LQjNXLWpBc3BjR01pc1BTUWc9czk2LWMiLCJnaXZlbl9uYW1lIjoidHJlZWQiLCJmYW1pbHlfbmFtZSI6ImVwb3NpdCIsImxvY2FsZSI6ImlkIiwiaWF0IjoxNjkxNjY1MjAwLCJleHAiOjE2OTE2Njg4MDB9.vnhZGSZuf57A18EWU8SGhPWgTERHIV3DwOVsAbWKC6R2i96ECfQo0o74q4Tard39k4U9e1fHMpwDiOkZYVoApGy4VTv449wkCW-WU147k9GHjrbVN4rvi85ej4vPrcUW26E_9gbG7qgHx_ycrJZzmM3Gr035_N9scc2vJf0uET0V3AnHGLT7Xa1Gj8XyG-rzyRqByNg5WxPhxsPiJWSERl8r1H1ywF_X-T4EBHMKhM0KNwxef0lbz1BsWzvyFya12e1vCcqG-DND6e_wE5YHOREWbGIgiYyicp4au7e7RaRKsGcG69MKdQuX98rK36CcSL6tNIQTDO75kqPMWO6j8w',
        expiry_date: 1691668799209
      },
    };
    this.data = data;
  }

  async sendData() {
    try {
      const combinedData = {
        data: this.data,
        rawJsonText: JSON.stringify(this.requestBody),
      };

      const response = await request
        .post(this.completeUrl)
        .set('Content-Type', 'application/json')
        .send(combinedData);

      console.log('Response:', response.body);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
}

module.exports = RequestHandler;