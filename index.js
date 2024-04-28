const express = require('express')

const app = express();
const PORT = 2435;
app.use(express.json())

const routes = require('./routes/route')
app.use(('/'),routes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
