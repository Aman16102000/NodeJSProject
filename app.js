const express = require("express");
const bodyParser=require('body-parser');
const path=require("path");
const app = express();
const adminRoutes=require("./Routes/admin")
const shopRoutes=require("./Routes/shop")


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    // can also send file with out using path.join
    res.status(404).sendFile(__dirname+'/views/error.html')
})

app.listen(3000);

