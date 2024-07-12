const express = require('express')
const mongoose = require('mongoose');
const cors = require ('cors')
const bookRouter = require('./router/bookRoutes');
const authorRouter = require('./router/authorRoutes');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(()=> (console.log("connected"))).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://anjalidas1791:hTAdT7SPjuHd9tAg@cluster0.o3ltbrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}