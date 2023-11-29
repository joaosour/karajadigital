import express from "express"
import usersRoutes from "./routes/users.js"
import loginRoutes from "./routes/login.js"
import booksRoutes from "./routes/books.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

app.use("/", usersRoutes, loginRoutes, booksRoutes)

// app.use("/", loginRoutes)

const port = 8801

app.listen(port, () => {
    console.log(`✅ (1/2) Servidor ativo na porta: >> ${port}`)
})