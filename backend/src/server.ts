import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { initializeDatabase } from './db/init'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

async function startServer() {
  await initializeDatabase()
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}

startServer()
