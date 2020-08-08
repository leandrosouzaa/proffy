import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
   return res.json({message: 'olá mundo'})
})

app.listen(3333, () => console.log('👷 Server Started in port 3333') )