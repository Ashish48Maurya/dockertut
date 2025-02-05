//just for docker practice
//docker compose up --build -d
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello Docker from ${process.env.FILE_NAME}`)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});