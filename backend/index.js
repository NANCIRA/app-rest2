const app = require('./app')
const dotenv = require('dotenv')
dotenv.config()

require('.db/mongodb')
const PORT = 4000

app.Listen(PORT, () => {
    console.log('The server is running on port ${PORT}')
})