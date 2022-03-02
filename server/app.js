const express = require('express');
const searchResults = require('./data');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('/client'));




app.get('/', (req, res) => res.sendFile("/Users/harrymoore/Projects2022/FP_GooglePagetwo/client/index.html"));

app.get('/search', async (req, res) =>{
    try{
        const searchQuery = await req.query;
        const filterSearch = await searchResults.filter(description => {
            let isValid = true;
            for(key in searchQuery){
                let splitDescription = description[key].split(" ");
                let mainDescription = splitDescription[1];
                let subDescription = splitDescription[0];
                isValid = isValid && description[key] === searchQuery[key] || mainDescription === searchQuery[key] || subDescription === searchQuery[key] || description[key].includes(searchQuery[key]) || description.Name === searchQuery[key];
            }
            return isValid;
        });
        res.json({data: filterSearch})
    }
    catch(err){
        res.send(err.message);
    }
})




module.exports = {
    app
  }




