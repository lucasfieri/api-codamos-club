const { createServer } = require('http')
const request = require('supertest');
const app = require('./app');

let server;

beforeAll(done => {
  server = createServer(app)
  server.listen(3000, done)
});

afterAll((done) => {
  server.close(done)
})

describe('Example Endpoint', () => {
  it('should log Hello World', async (done) => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
    done();
  })
})
