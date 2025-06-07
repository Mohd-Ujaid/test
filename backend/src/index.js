import express from 'express';

const app = express()



app.get("/",(req,res) => {
    res.json({
        status: "success",
        message: "confirm"
    })
    // res.send('Hello World!');
})

app.listen(8080 , ()=> {
    console.log(`app is runnong `);
})