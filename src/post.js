const request = require('superagent');

const url = 'http://localhost:5000/getToken';

/*
const requestBody = {
  "code":"code=4/0Adeu5BVqDVDq5UvrmQWQHdvO8fqpqZy6cky5m7sRvukeiZ7GQC0TJEJt5y2jsJH_KRaEmQ"
};
*/

const requestBody = {
  "code":"4/0Adeu5BXUuw2bFizjqRSKc1KxC7K7xOJRaCFmLAqowpMzbrFE-U2zj0_xM0ujW8c2RIPu2A"
};




/*
request
  .post(url)
  .send(postData) // Mengirim data dalam body permintaan POST
  .end((err, res) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Response:', res);
    }
  });
  */
  const rawJsonText = JSON.stringify(requestBody);
 //const rawJsonText = requestBody

  request
    .post(url)
    .set('Content-Type', 'application/json') // Mengatur header Content-Type menjadi application/json
    .send(rawJsonText) // Mengirimkan body request dalam bentuk raw JSON text
    .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
