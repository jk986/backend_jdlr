import usuario from "../models/User.js";
import validator from "validator";


//------------ iniciar sesion 
const iniciarSesion = async (req,res) => {
    const { email, pass }  = req.body;
    try {
        const newUser = await usuario.findOne({email}); // traer objeto por email
        // Validators
        if( validator.isEmpty(email.trim()) || validator.isEmpty(pass.trim()) ){
            return res.status(403).json({msg:"Los campos son requeridos",code:1});
        }
        
        if( newUser.pass === pass ){
            return res.status(200).json({msg:"Autenticación exitosa",code:0});
        }else{
            return res.status(403).json({msg:"Password Incorrecto"});
        }

    } catch (error) {
        const err = new Error("Falló la auenticación");
        return res.status(404).json({msg:err.message});
    }
};




export {
    iniciarSesion
};