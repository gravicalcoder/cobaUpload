const request = require('superagent');
const RequestHandler = require('./requestHandler-house');

class Load {
  constructor() {
    this.url = 'http://localhost:5000/readDrive';
    this.requestBody = {
      "token": {
        access_token: 'ya29.a0AfB_byBjBbrWPc7Ua1H8LuaeV_thZKxfJmcUT9ajMlq1SXVGwgqEHOKa-ZOA-Z5DJ6G7qZ997hBHZx7eqKzOeBvnmOwRXChaXBeBGX9tAMzKCBpzmCvcFWaiWMLsRIjkFoaSumP7j-InUqtsqV1AK9B4DbR4aCgYKAc0SARESFQHsvYlsXO6uz5p5R2Lb8bi0utAabw0163',
        refresh_token: '1//06eN-o4jR986HCgYIARAAGAYSNwF-L9Ir8cdxNI2p2WnaH9_KwLcWyULqvHDVLRu0rlkFBfPfWCN24ksICxaTrBjvSHiwtbrIVSA',
        scope: 'https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.file',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTc0NTcxOTQwNTkyMTE5MjE0MzEiLCJhdF9oYXNoIjoic3ZhU0hoU2d3QnJrM2VFcDU4NUlSdyIsIm5hbWUiOiJidWJ1YWsgYnVsZWtrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGNFUHlQUExDV2JCNnVxQy1FR2VKNkk4UEI2TldyQlBZS3Ywd0t5Z056SjRnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6ImJ1YnVhayIsImZhbWlseV9uYW1lIjoiYnVsZWtrIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2OTE2NjM4MjMsImV4cCI6MTY5MTY2NzQyM30.wJkpM4Q2deEeXxzBlGfn7hBLjGCbKFmQKaGZUniafk6atgMsHVlTK3VvWD3CeUo1i-36r4XmQJvEYtEHCoOnx0NYFWwwoOh9B0R2sNDpTtWGJueTHvvTlPYPN8BuMFWIC0p0iEuS2vCTQHoR3GyTpccJyoE3eVDdxPzos7QUdvV6GI1yqXwfvcTz-87b4Mf41E3FZtYOXiCJp2JUF0SL-5OOeYXN5lNNaoV8Hv6jwiDx9whj9QuGTcv7Vri1oDUwpyygav7PKvY2oGwyHazO08cCWY1U9OaUDsQwCDtcxgdBSCsatWyqjM1XKllf01OxPkBhG5EVwGzzV2-ut9Dr6g',
        expiry_date: 1691667422954
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

