import express,{json} from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';

//-------------
const app = express(); //   Funcionalidad express
dotenv.config();
app.use(express.json());

//-------------
    //  Routing
app.use('/auth',authRoutes);

//-------------
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})