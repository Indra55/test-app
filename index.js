import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('Hello from Holonet!'))

app.listen(3000, () => console.log('running on 3000'))
