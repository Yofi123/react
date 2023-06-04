const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/',(req,res) => {
    res.send('<h1>Welcome to Sage</h1>');
});
app.get('/about',(req,res) => {
    res.send('<h2>About Sage</h2>');
});
app.listen(8000,() => {
    console.log("server listening on port 8000...")
})