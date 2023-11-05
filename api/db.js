import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "russo~~cmt",
    database: "karajadigital"
})

db.connect((err) => {
    if (err) {
      console.error(`🤬 (2/2) Erro ao conectar ao database: ${db.config.database}`, err);
      return;
    }
    console.log(`✅ (2/2) Banco de dados ativo...: >> ${db.config.database}`);
  });