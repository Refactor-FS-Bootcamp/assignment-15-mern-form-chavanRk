import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
//App Config
const app = express()
const port = 8080
const connection_url = 'mongodb+srv://chavan1:chavan1@cluster0.hpyyr4v.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url)

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello RohitChavan"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) res.status(500).send(err);
        else res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) res.status(500).send(err);
        else res.status(200).send(data)
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))