const express = require('express');
const app = express();
const path = require('path');

// serve up production assets
app.use(express.static(path.resolve(__dirname, '../', 'client', 'build')));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
console.log('server started on port:', PORT);
app.listen(PORT);