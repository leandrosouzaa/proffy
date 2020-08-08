import express from 'express';
import ClassesController from './controllers/ClassesController';

const classesControllers = new ClassesController();

const routes = express.Router();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);


export default routes;
