const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
    //mnacacne es karqi
});



app.listen(3000,(err, res) => {
    if(err){
        console.log(err);
    }
});
