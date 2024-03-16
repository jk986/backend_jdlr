import mongoose from "mongoose";

const schUsuario = mongoose.Schema({
    email:{type:String,required:true,trim:true},
    pass:{type:String,require:true,trim:true},
    role:{type:String,require:true,trim:true}
});

const usuario = mongoose.model("usuario",schUsuario);
export default usuario;