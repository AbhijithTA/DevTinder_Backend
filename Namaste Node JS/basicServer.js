import  express from 'express';
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello, World!");
    console.log('Request received');
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})