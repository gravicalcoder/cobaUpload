const request = require('superagent');

class RequestHandler {
  constructor(baseUrl, data) {
    this.completeUrl = 'http://localhost:5000/downloadTrees/'+baseUrl;
    this.requestBody = {
      token: {
        access_token: 'ya29.a0AfB_byAXUoI--u4ZHn7UyfwwWriXDMc-MGEBNrv7x11LUDZQQdsG-P58pWbH3P57v4GVbRcxxPEHOrUpyxEqtenyU_UhaZ-Xq8PzlPAIK_j-FXBVMazhsLe09GaneCLNCZW0aCTAZt4ldadnkKfhE0hPo1IHaCgYKAa4SARISFQHsvYlsN0i4u0EG_0C7xmt-haFfsQ0163',
        refresh_token: '1//064GvU2ExASkiCgYIARAAGAYSNwF-L9IrXzBs6-vpdIFYJFqD7JYI-Kf7RB2YF4U8S9i-oZ2Ppb1XAEY7JX9WMqPKWLnXNm8zAm8',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/userinfo.profile',
        token_type: 'Bearer',
        id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxMWUzOWUyNzkyOGFlOWYxZTlkMWUyMTY0NmRlOTJkMTkzNTFiNDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5ODI2NjcxNDkwNTItdmRmb3MzaHJmODRnYjBvNTVodTQ5anU2bDdzMmhiNGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDAzMzc0OTM4NjQ2ODQxMTIzOTkiLCJhdF9oYXNoIjoieS1SME05SGJlVjVOZElzRjVianpZQSIsIm5hbWUiOiJwb2hvbiBiZXNhciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQWNIVHRjN01CTFR4UzRFMDhDTkxMaTVpb1E5bm1SMV9LM242LS16MzZVU2NGU0E9czk2LWMiLCJnaXZlbl9uYW1lIjoicG9ob24iLCJmYW1pbHlfbmFtZSI6ImJlc2FyIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2OTE2NzA2MTgsImV4cCI6MTY5MTY3NDIxOH0.PfcV1xBxobVLaNmiMZ2i9FPvx18vNBKt8L2duvFDeEr0Faw0QPgstuw-JISfhmmFA_fqjNcVpEO8YiwVQDM4_EpalvsO1w97rGmaCrICFLawikAXN4NS8IkEXbEMC_3u-GJ1Bf5LACQwVAIpUgAVcJs0IZAR6DRLz2AOeqv8Empnt3olN-ORnI1GlxGFh2UK51ZTxANeqbzsO_ET2C4OlHv_wJjztaAYNKktT-HWv0cCI6xz3wger6ckgRbDqae5VoL2GyhE6olQFu7MgkYveoT7cdIA9fsV1oqcnoOuCEUkk1dLbiThy4PsYGTrFy7my8I8txSGjoF8wvtRvGxobg',
        expiry_date: 1691674217065
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