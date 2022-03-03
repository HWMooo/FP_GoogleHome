const request = require('supertest');
const server = require('./app');

describe('API server tests', () =>{
    let api;
    

    beforeAll(() => {
        api = server.app.listen(5000, () => 
        console.log('Test server running on port 500'));
    });

    afterAll((done) => {
        console.log('Stopping server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200,done);
    })

    it('responds to get /search with status 200', (done) => {
        request(api).get('/search').expect(200,done);
    })

    it('responds to get /api with status 200', (done) => {
        request(api).get('/api').expect(200,done);
    })

    it('responds to get /search?description=shop with status 200', (done) => {
        request(api).get('/search?description=shop').expect(200,done);
    })


    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });






});
