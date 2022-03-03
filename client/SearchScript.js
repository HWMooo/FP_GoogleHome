
const section = document.getElementById('searchResult display');
const body = document.querySelector('body');
const searchBar = document.getElementById('search-bar');



let searched = location.href.split("=");
let searchedTerm = searched[1];


fetch('http://localhost:3000/api').then(function (response) {
        response.json().then(function (json) {
            for(item in json){
              let splitDescription = json[item].description.split(" ")
              if(searchedTerm === json[item].description || searchedTerm === splitDescription[0] || searchedTerm === splitDescription[1] || searchedTerm === json[item].Name || json[item].description.includes(searchedTerm) ){
                                const node = document.createElement('a');
                                node.href = "//" + json[item].url;
                                node.style.display = 'block';
                                const text = document.createTextNode(`${json[item].Name} | ${json[item].description}`);
                                node.appendChild(text);
                                section.appendChild(node);
                
              }
            }
          })
})


searchBar.addEventListener('keypress', function SearchResults(event) {
    if (event.key === 'Enter') {
        let searchTerm = searchBar.value.toLowerCase();
        if(searchTerm === ""){
            alert("search input empty");
        }
        else{
            window.location = 'http://localhost:3000/search?description=' + searchTerm;
        }
    }

})





