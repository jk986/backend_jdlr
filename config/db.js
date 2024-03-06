import mongoose from "mongoose";

const conectarDB = async () =>{
    try{    
        const conection = await mongoose.connect(process.env.MONGO_URI);
        let url = `${conection.connection.host} ..:.. ${conection.connection.port}`
        console.log(`DB conectada en ${url}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default conectarDB;