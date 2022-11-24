const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 7000;
const app = express();



// Middleware
app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
    res.send('Server Is Running');
})

app.listen(port, () => console.log(`Running On ${port}`))