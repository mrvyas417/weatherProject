const express =require('express'); //omport express
const app=express();  // calling express for uese 
const path=require('path'); //node module for path
const hbs =require('hbs'); // require hbs for use partials
const port= process.env.PORT || 8000; // set enviornment variable

// public static path
const staticPath=path.join(__dirname, '../public'); //accesing public folder
// console.log(staticPath);


// static website use with express 

app.use(express.static(staticPath)); // show the static web pages with help of express


// set template engien hbs (handle bars)
const templates_path=path.join(__dirname, '../templates/views'); 
const partilas_path=path.join(__dirname, '../templates/partials'); 

app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partilas_path);


// creating routing with express
app.get('/',(req,res)=>{  //first argument is must be req
    res.render('index');

});
app.get('/about',(req,res)=>{  //first argument is must be req
    res.render('about');

});
app.get('/weather',(req,res)=>{  //first argument is must be req
    res.render('weather'); // for messgae  or sen data or bs pages

});
app.get('*',(req,res)=>{  // use when page not found "*"
    res.render('404error',{
        errorMsg:'oops page not found'
    }); // for messgae  or sen data

});




app.listen(port,()=>{
    console.log(`listining to the port at ${port}`);
})
