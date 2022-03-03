button = document.querySelector('#searchButton');
searchedTerm = document.querySelector('#search-bar');
LuckyButton = document.querySelector('#LuckyButton')
const ul = document.querySelector('ul');

button.addEventListener('click', SearchResults);
LuckyButton.addEventListener('click', RandomResult);

function SearchResults () {
    let searchTerm = searchedTerm.value.toLowerCase();
    if(searchTerm === ""){
        alert("search input empty");
    }
    else{
        window.location = 'http://localhost:3000/search?description=' + searchTerm;
    }
}


function RandomResult () {
    fetch('http://localhost:3000/api').then(function (response) {
        response.json().then(function (json) {
            for(item in json){
                    randomSearch = json[Math.floor(Math.random()*json.length)].Name;
                    window.location = 'http://localhost:3000/search?description=' + randomSearch;
            
            }
            })
        })
}
