const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf8');




describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        

    });

    describe('head', () => {
        test('document has a title', () =>{
            const head = document.querySelector('head');
            expect(head).toBeTruthy();
            expect(head.textContent).toContain('Ike_Harry_Google_Homepage');


        });
    });

    describe('body', () => {
        test('document has google logo as an image', () => {
            const logo = document.querySelector('#google-logo');
            expect(logo).toBeTruthy();

        });

        test('Has a search bar', () => {
            let searchBar = document.querySelector("#search-bar");
            expect(searchBar).toBeTruthy();



        });

        test('Has a search button', () => {
            let searchButton = document.querySelector("#searchButton");
            expect(searchButton).toBeTruthy();
            expect(searchButton.textContent).toContain('Google Search');



        });

        test('Has an im feeling lucky button', () => {
            let luckyButton = document.querySelector("#LuckyButton");
            expect(luckyButton).toBeTruthy();
            expect(luckyButton.textContent).toContain(`I'm feeling lucky`);



        });

        test('has a footer', () => {
            let footer = document.querySelector("footer");
            expect(footer).toBeTruthy();
        })
    });







});