

//------------
const iniciarSesion = async (req,res) => {
    try {
        const { email, pass }  = req.body;
        return res.json({msg:"Autenticacion Correcta",email:email,pass:pass})
        
    } catch (error) {
        const err = new Error("Autenticación fallida");
        return res.status(403).json({msg:err.message});
    }
}




export {
    iniciarSesion
};