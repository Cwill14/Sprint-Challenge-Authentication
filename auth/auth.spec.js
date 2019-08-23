const request = require('supertest');
const authRouter = require('./auth-router.js');
const db = require('../database/dbConfig.js');
const Users = require('./auth-model.js');

describe('register', () => {
    describe('register status', () => {
        it('returns 201 created', () => {
            return request(authRouter)
                .post('/register')
                .send({
                    username: 'test',
                    password: 'test'
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
    describe('length of db', () => {
        it('should insert user into db', async () => {
            await Users.add({ username: "test3", password: "test3" })
            const users = await db('users');
            expect(users).toHaveLength(5)
        })
    })
})
describe('login', () => {
    describe('check name', () => {
        it('name should match', async () => {
            let user = await Users.getByFilter({ username: 'jim', password: 'qwerty' })
            expect(user.username).toBe('jim')
        })
    })
    describe('login status', () => {
        it('returns 200', () => {
            return request(authRouter)
                .post('/login')
                .send({
                    username: 'bob',
                    password: 'bob'
                })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
})
