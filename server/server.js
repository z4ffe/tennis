const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const authController = require('./controller/auth.controller')
require('dotenv').config()
mongoose.connect(process.env.DB_URI)

app.use(cors({origin: 'http://localhost:3000', credentials: 'true',}));
app.use(cookieParser())
app.use(express.json())

app.use('/api', routes)
app.use('/admin', authController.isAuth)
app.use('/login', authController.login)
app.use('/logout', authController.logout)

app.listen(process.env.PORT, () => console.log(`Server is running on PORT: ${process.env.PORT}`))
