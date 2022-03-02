
button = document.querySelector('button');
searchedTerm = document.querySelector('input');
const ul = document.querySelector('ul');




button.addEventListener('click', function SearchResults(event) {
    let searchTerm = searchedTerm.value.toLowerCase();
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
})

