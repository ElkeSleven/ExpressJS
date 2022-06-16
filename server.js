
const express = require('express')
const app = express()

app.set("view engine","ejs")
app.get('/', (req, res,) => {
    console.log('hallo')
    //res.send('hi')
    //res.sendStatus(500) // je kan een errow sturen
    //res.sendStatus(500).send('just a string message ')
    //res.json({JSONmessage: "a message"})
    //res.download("server.js")    // bestand word gedownload bij opstart
   // res.render("app",{ text: "hallo"})    // render een html pagina
})



//app.post()
//app.delete()

app.listen(44397)

