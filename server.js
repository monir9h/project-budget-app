//Dependencies
const app = require("./app.js")

//Configuration
require("dotenv").config()
const PORT = process.env.PORT

//
app.listen(PORT, ()=> {
    console.log(`Listening of port ${PORT}`)
})