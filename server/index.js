import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(cors());
app.use(express.json());
import fs from 'fs';

app.get(`/`, async (req, res) => {
      async function getUser(name) {
          try {
            const response = await axios.get(`https://api.github.com/users/${name}`,{
                headers: {
                  Authorization: fs.readFile('./test.txt', 'utf8', (err, data) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    console.log(data);
                  })
                }
            });
            res.send(response.data);
            console.log(response.data);
          } catch (error) {
            res.send(error);
            console.log(error);
          }
        }
        getUser(req.query.q)
  });
app.listen(3000,()=>console.log('listening on port 3000'));
