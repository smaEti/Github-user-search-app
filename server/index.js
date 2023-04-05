import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(cors());
app.use(express.json());
import fs from 'fs';
var API_KEY;
// importing the api key from the config file
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  API_KEY = data;
})
//api get for giving the github user information
app.get(`/`, async (req, res) => {
      // geting user from github using axios 
      async function getUser(name) {
          try {
            const response = await axios.get(`https://api.github.com/users/${name}`,{
                headers: {
                  Authorization: API_KEY,
                }
            });
            //sending the response to the user (github informations )
            res.send(response.data);
            console.log(response.data);
          } catch (error) {
            res.send(error);
            console.log(error);
          }
        }
        getUser(req.query.q)
  });
// running the server on port 3000
app.listen(3000,()=>console.log('listening on port 3000'));
