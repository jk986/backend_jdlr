import express from "express";
import { createUser } from "../controllers/userController.js";
//------------
const ROUTER = express.Router();


//------------
ROUTER.post('/',createUser);

export default ROUTER;

