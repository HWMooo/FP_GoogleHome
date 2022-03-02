button = document.querySelector('#searchButton');
searchedTerm = document.querySelector('#search-bar');
LuckyButton = document.querySelector('#LuckyButton')
const ul = document.querySelector('ul');



button.addEventListener('click', function SearchResults(event) {
    let searchTerm = searchedTerm.value.toLowerCase();
    if(searchTerm === ""){
        alert("search input empty");
    }
    else{
        window.location = 'http://localhost:3000/search?description=' + searchTerm;
        fetch('http://localhost:3000/search?description=' + searchTerm).then(function (response) {
            response.json().then(function (json) {
            for(item in json){
                for(let details = 0; details < json[item].length; details++){
                    let list = document.createElement("li")
                    let text = document.createTextNode(`${json[item][details].Name},${json[item][details].description},${json[item][details].url}`);
                    list.appendChild(text);
                     ul.appendChild(list);
                }
            }
            })
        })
    }
})

LuckyButton.addEventListener('click', function RandomResult(){
    fetch('http://localhost:3000/search?description=shop').then(function (response) {
        response.json().then(function (json) {
            for(item in json){
                for(let details = 0; details < json[item].length; details++){
                    randomSearch = json[item][Math.floor(Math.random()*json[item].length)].Name;
                    window.location = 'http://localhost:3000/search?description=' + randomSearch;
                }
            }
            })
        })
})
