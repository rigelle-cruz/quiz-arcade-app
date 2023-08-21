import express from 'express'
import * as Path from 'node:path'

import questionRoutes from './routes/question'

const server = express()

server.use(express.json())

server.use('/api/v1/questions', questionRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))

  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'))
  })
}

export default server
