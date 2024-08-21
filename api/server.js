import express from "express"
import fs from "fs"
import cors from "cors"
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = 8000

app.use(cors())

app.get("/posts", (req, res)=>{
    try {    
        const data = fs.readFileSync("src/posts.json", "utf-8")
        const jsonData = JSON.parse(data)
        console.log(jsonData)
        res.send(jsonData)
        
    }
    catch(error){
        console.log(error)
    }
})

app.get("/img/:filename", (req, res)=>{
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'src', 'pictures', filename);
    res.sendFile(filePath)
})

app.listen(PORT, ()=>[
    console.log(`Server rodando em http://localhost:${PORT}`)
])