import express from 'express';

const routes = express.Router()

routes.get('/users', (req, res) => {
   return res.json({message: 'olá mundo'})
})

export default routes;
