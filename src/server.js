const express = require('express');
const app = express();
const cookieparser=require('cookie-parser');
const path =require('path');
const port = process.env.PORT || 5000;
require('dotenv').config();
const route=require('../routes/route');
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"../client/build")));
app.use(route);
app.get('*',(req,res)=>{
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
          res.status(500).send(err);
        }
      );
})




app.all('*', (req, res) => {
    res.status(200).send('Ooops page not found');
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})