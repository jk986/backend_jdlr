import express, { Router } from 'express';
import { registrar } from '../controllers/authController.js';

const ROUTER = express.Router(); // para ,etodos http

ROUTER.post('/',registrar);

export default ROUTER;