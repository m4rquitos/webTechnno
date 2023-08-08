import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import indexRoutes from "./routers/index.js"


const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("views", join(__dirname, "views"))

app.set("view engine", "ejs")

app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'public/img')))

app.use(indexRoutes)
app.listen (4000)

console.log ("servidor en el puerto", 4000)

