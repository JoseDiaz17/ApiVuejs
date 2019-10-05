const express = require('express');
const server = express();
const port = 3000;//puerto

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');//directorio que se ejecutara
 });

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
