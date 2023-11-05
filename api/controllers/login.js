import { db } from "../db.js";

export const login = (req, res) => {
    
    const checkUserAuthorized = "SELECT * FROM usuario WHERE `usuario` = ? AND `senha` = ? AND `usuario_admin` = 1";

    db.query(checkUserAuthorized, [req.body.usuario, req.body.senha], (err, results) => {
        if(err) {
            return res.status(500).json(err);
        }
        
        if(results.length > 0) {
            return res.status(200).json("Logado!");
        }else{
            return res.status(401).json("Credenciais inválidas");
        }
    })

}