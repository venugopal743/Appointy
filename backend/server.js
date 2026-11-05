
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// App configuration
const app = express()
const port = process.env.PORT || 4000

// Connect database and Cloudinary
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// Test API
app.get('/', (req, res) => {
    res.send('API Working')
})

// Test database connection
app.get('/test-db', (req, res) => {
    const state = mongoose.connection.readyState

    if (state === 1) {
        res.send('Database is connected')
    } else {
        res.status(500).send('Database is NOT connected')
    }
})

// Start server
app.listen(port, () => {
    console.log(`Server started on PORT:${port}`)
})
