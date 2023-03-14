const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://islahola:ASb2L6YYZY8z8o6k@cluster0.pmzcmix.mongodb.net/?retryWrites=true&w=majority'

// ASb2L6YYZY8z8o6k
const PORT = process.env.PORT || 4000

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(PORT, () => console.log(`Baru ya listening on port ${PORT}`))
