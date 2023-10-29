const request = require('superagent');

class RequestHandler {
  constructor(baseUrl, data) {
    this.completeUrl = 'http://localhost:5000/downloadBushes/'+baseUrl;
    this.requestBody = {
      token: {
        access_token: 'ya29.a0AfB_byBw9BhCI0inzSO0gtSA4Aq0Og7zTjpLwFD1-zoyA4hbPMudK0wZyjhYlNNHmKOnpUS1etdbT0_2LpGUnFmtOlJUEvbXGMlFwgeCyl8KLkrygTuNi0bGsD2ur-8Gg4nuP7zUU_AR-IRsNiX4mq380XvDaCgYKAaQSARMSFQHsvYlsVtyNqpE2i8esEQG1bCgVHw0163',
        refresh_token: '1//06ubnCSeg6rKkCgYIARAAGAYSNwF-L9IrQElcaSVWA854LQgyzdSzyNK7bbEZafoHR7vf4Ds35FQMaPKNhCLkVPfjUd0JE8WfqoU',
        scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.appdata',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMzODEzMjA5NjI0MDI2MTI2MTYiLCJhdF9oYXNoIjoiQVZpQ09pRm40d0pETkVzblRXRjc1USIsIm5hbWUiOiJJd2lsbCBOZXZyZWZvcmdldCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRjcTQwR3VKYWxWRXdITExuYjNSY21lRlNYQmRSLUZlclIyVmlsaS01eWJoQT1zOTYtYyIsImdpdmVuX25hbWUiOiJJd2lsbCIsImZhbWlseV9uYW1lIjoiTmV2cmVmb3JnZXQiLCJsb2NhbGUiOiJpZCIsImlhdCI6MTY5MTY2NDQxMCwiZXhwIjoxNjkxNjY4MDEwfQ.ZROuF4rR2s9ZA4-JGvyVTflRtBety0KjjW21rv9BtU59gxYKFWpc3NFJRwYpmYvkrP-ua9UIvREM4USqmTKysUm3G0Sc-glu5pQBUgv_LF7Ccvs6dSt8du6pMwftjmfY_p-CCw4-KhkCXf8mImMqb5WPRuWzLysO_Kddaq_NDJaV_oxaJpxcfZXzIcZXFRdcq2U5j99qoWZfLx5jOvJKEUWaZkKOnKI7cG6eO_U6O0Cmjrx004oS9muBgxk8ESH76j05OMXlmOU5bf5AHdZlQi0lofYwyb-F0Pa86Paoc8NPXIXtYld-pcMTvZL5lzu5n_8EkFBKUinw7K6c8D5WNw',
        expiry_date: 1691668009431
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