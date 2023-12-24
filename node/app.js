import express from "express"

import cors from "cors"
import db from "./databse/db.js"
import BlogRoutes from "./routes/routes.js"

//importamos la conexion a la base de datos
const app = express()


app.use(cors())
app.use(express.json())
app.use(`blogs`,BlogRoutes)

try {
    await db.authenticate()
    console.log(`autenticado`);
} catch (error) {
    console.log(error);
}

app.get("/",(req,res)=>{
    res.send("hola")
})

app.listen(8000,()=>{
    console.log(`escuchando por el puerto 8000...`);
})