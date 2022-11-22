import express from 'express'
import cors from 'cors'

import usersRouter from './routers/users-router'

import "reflect-metadata"


const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME ||  'http://localhost'

const app = express()

app.use(cors({
    'origin': '*'
}))

app.get('/', (req, res) => {
    res.send('Bem-Vindo!')
})

app.use('/api', usersRouter)


app.listen(PORT, () => {
    console.log(`SERVER RUNNING IN - ${HOSTNAME}:${PORT}`)
})

