import usuario from "../models/User.js";
import validator from "validator";
//-----------------

const createUser = async (req,res) => {
    const {email,pass} = req.body;
    try {
        console.log('Desde crear user...');
    } catch (error) {
        
    }
}


export {
    createUser,
}