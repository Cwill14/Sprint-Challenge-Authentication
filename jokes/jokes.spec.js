const request = require('supertest')
const jokeRouter = require('./jokes-router.js');

describe('GET /', () => {
    it('should return 200', () => {
        return request(jokeRouter)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
    it('return JSON', () => {
        return request(jokeRouter)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/josn/);
            })
    })
})