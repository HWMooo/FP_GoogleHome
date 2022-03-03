const express = require('express');
const searchResults = require('./data');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => 
res.sendFile("/client/index.html", {root: '..'}));

app.post('/', (req, res) =>{
    res.status(405).send("Invalid method")
})



/// would like to make 404 when page doesnt exist, keeping this as it is close but not currently working.

//app.get('/search', async (req, res) =>{
//    try{
//        const searchQuery = await req.query;
//        const filterSearch = await searchResults.filter(description => {
//            let isValid = true;
//            for(key in searchQuery){
//                let splitDescription = description[key].split(" ");
//                let mainDescription = splitDescription[1];
//                let subDescription = splitDescription[0];
//               isValid = isValid && description[key] === searchQuery[key] || mainDescription === searchQuery[key] || subDescription === searchQuery[key] || description[key].includes(searchQuery[key]) || description.Name === searchQuery[key];
//            }
//            return isValid;
//        });
//        res.sendFile('/client/Search.html', {root: '..'})
//        
//    }
//    catch(err){
//        res.status(404).send(err.message);
//    }
//})


app.get('/search', async (req, res) =>{
    try{
        res.sendFile('/client/Search.html', {root: '..'});

}catch(err){
        res.status(404).send("PAGE NOT FOUND");
    }
});




app.get('/api', (req, res) =>{
    res.json(searchResults);
})


module.exports = {
    app
  }




