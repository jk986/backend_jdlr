import express, { Router } from 'express';
    import { 
    iniciarSesion
} from '../controllers/authController.js';

const ROUTER = express.Router(); // para ,etodos http

ROUTER.post('/',iniciarSesion);

export default ROUTER;