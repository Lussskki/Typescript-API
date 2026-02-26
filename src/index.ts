import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send({message: `Here is GET method`})
})


app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})