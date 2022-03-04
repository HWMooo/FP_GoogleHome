const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../client/Search.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe('head', () => {
        test('document has a title', () =>{
            const head = document.querySelector('head');
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('search page');


        });
    });

    describe('body', () => {
        test('Has a search bar', () => {
            let searchBar = document.querySelector("#search-bar");
            expect(searchBar).toBeTruthy();
        });
    });

});