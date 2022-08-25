const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use('/', express.static('opening.html'))
app.listen(3001, () => {
    console.log(`Example app listening on port ${port}`)
})