var express = require('express');
var app = express();
var things = require('./things.js')
var pool = require('./queries.js')

app.use('/things', things);
// app.get('/', (req, res)=>{
//     pool.query('SELECT * FROM film', (err, result)=>{
//         if(err){
//             throw err
//         }
//         res.send(result)
//     })
// })
// app.get('/', (req, res)=>{
//     pool.query('SELECT * FROM film WHERE film_id=8;', (err, result)=>{
//         if(err){
//             throw err
//         }
//         res.send(result)
//     })
// })
// app.get('/', (req, res)=>{
//     pool.query('SELECT * FROM category;', (err, result)=>{
//         if(err){
//             throw err
//         }
//         res.send(result)
//     })
// })
app.get('/', (req, res)=>{
    pool.query('SELECT * FROM film_category WHERE category_id = 6;', (err, result)=>{
        if(err){
            throw err
        }
        res.send(result)
    })
})

pool.connect((err, res) => {
    console.log(err);
    console.log(res);
})

app.listen(3000)
