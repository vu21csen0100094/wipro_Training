const chai = require('chai');
const request = require('supertest');
const app = require('../app'); // import the express app
const expect = chai.expect; // chai expect for assertions

describe('GET /', () => {
    it('should return Hello World!', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);     // assert status code
                expect(res.text).to.equal('Hello World!'); // assert response text
                done();
            });
    });
});
