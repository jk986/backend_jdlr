

//------------
const registrar = async (req,res) => {
    try {
        // evitar registros duplicados
        const {email} = req.body;
        return res.json({msg:`Hola mundo desde authController ${email}`});
    } catch (error) {
        
    }
}


export {
    registrar
};