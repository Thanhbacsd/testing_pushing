import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.sendFile('index.html'); 

});

const PORT = 5000
app.listen(PORT, () => console.log(`Server is Listening on port: ${PORT}`))