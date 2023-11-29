import { db } from "../db.js";

export const getBooks = (_, res) => {
    const q = "SELECT * FROM livro";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
};

export const addBook = (req, res) => {

    const checkBookExist = "SELECT * FROM livro WHERE codlivro = ?";

    db.query(checkBookExist, [req.body.codlivro], (err, results) => {
        if(err) {
            return res.status(500).json(err);
        }
        else if(results.length > 0) {
            return res.status(409).json("Livro já existe!");
        }
        else {
            
            const q = "INSERT INTO livro(`codlivro`, `autorsobrenome`,`autornome`,`anopublicacao`, `titulo`, `complemento`, `tipodepublicacao`, `areadoconhecimento`, `autornaoiny`) VALUES(?)";
        
            const values = [
                req.body.codlivro,
                req.body.autorsobrenome,
                req.body.autornome,
                req.body.anopublicacao,
                req.body.titulo,
                req.body.complemento,
                req.body.tipodepublicacao,
                req.body.areadoconhecimento,
                req.body.autornaoiny,
            ];
        
            db.query(q, [values], (err) => {
                if(err) return res.status(500).json(err);
        
                return res.status(201).json("Livro adicionado com sucesso");
            });
        }
    });
};

export const updateBook = (req, res) => {

    const q = "SELECT * FROM livro WHERE `id` = ?";

    db.query(q, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(404).json("Livro não encontrado");
        }

        else {
            const q = "UPDATE livro SET `codlivro` = ?, `autorsobrenome` = ?,`autornome` = ?,`anopublicacao` = ?, `titulo` = ?, `complemento` = ?, `tipodepublicacao` = ?, `areadoconhecimento` = ?, `autornaoiny` = ? WHERE `id` = ?";
            const values = [
                req.body.codlivro,
                req.body.autorsobrenome,
                req.body.autornome,
                req.body.anopublicacao,
                req.body.titulo,
                req.body.complemento,
                req.body.tipodepublicacao,
                req.body.areadoconhecimento,
                req.body.autornaoiny,
                req.params.id,
            ];
    
            db.query(q, values, (err) => {
                if (err) {
                    return res.status(500).json(err);
                }
    
                return res.status(200).json("Livro atualizado com sucesso."   );
            });
        }
    });
};

export const deleteBook = (req, res) => {
    const checkBookExist = "SELECT * FROM livro WHERE `id` = ?";

    db.query(checkBookExist, [req.params.id], (err, results) => {
        if(err) return res.status(500).json(err);

        else if(results.length === 0) {
            return res.status(404).json("Livro não encontrado!");
        }
        else {
            const q = "DELETE FROM livro WHERE `id` = ?";
        
            db.query(q, [req.params.id], (err) => {
                if(err) return res.json(err);
        
                return res.status(200).json("Livro deletado com sucesso");
            });
        }
    })

};