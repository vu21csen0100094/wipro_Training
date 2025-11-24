// Importing chai for assertions
// Importing supertest to test our express routes
// Importing the express app
const chai = require('chai');
const request = require('supertest');
const app = require('../app'); 
const expect = chai.expect;

// Test suite for GET / route
// describe() groups related tests together
describe('GET /', () => {

    // Single test case
    // "it" represents what we are testing
    // done() tells Mocha to wait for async request to complete
    it('should return Hello World!', (done) => {
        
        // supertest makes a GET request to our route
        request(app)
            .get('/')        // hitting GET /
            .end((err, res) => {

                // Assertion 1: response status should be 200 (OK)
                expect(res.status).to.equal(200);

                // Assertion 2: response text should be "Hello World!"
                
                expect(res.text).to.equal('Hello World!');

                // tell mocha this async test is done
                done();
            });
    });
});


// Further Testing can be done for following:
// 1. Testing other HTTP methods (POST, PUT, DELETE, etc.)
// 2. Testing with request body, query parameters
// 3. Testing error handling
// 4. Integration testing with databases or external services
// 5. Performance testing for response time and load handling

