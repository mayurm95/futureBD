const express = require("express");
const { configration } = require('./config/configration');
const cors = require('cors');
const router = require('./src/movie')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ urlencoded: true }))


app.use(cors())

/**
 * Movie Route
 */
app.use('/api', router);


/**
 * Not Found Route
 */
app.use('/', (req, res) =>{
    res.status(400).send({
        message: 'Not found'
    })
})

app.listen(configration.port, () => {
    console.log(`Server Started at ${configration.port}`)
});