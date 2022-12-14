const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'Backend/config/config.env'})
require('./config/database')
const app = express()
const cookieParser = require("cookie-parser")





app.use(express.json())
app.use(cookieParser())
//Routes
const startup = require('./routes/StartUp')
const investor = require('./routes/Investor')


app.use('/api/v1',startup)
app.use('/api/v1',investor)




//MiddleWare error
const errorhandler = require('./middleware/error')
app.use(errorhandler)



app.listen(process.env.PORT,()=>{
    console.log(`Running on ${process.env.PORT}`)
})