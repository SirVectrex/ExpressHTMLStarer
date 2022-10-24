const express = require('express');
const path = require('path');


// initialize express
const app = express();

// serve public folder
app.use(express.static(path.join(__dirname, 'public')));


// express route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// listen on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
});
