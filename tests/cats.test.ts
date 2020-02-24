import request from 'supertest'
import app from '../src/app'

describe('Get Cats', () => {
  it('should return list of cats', async () => {
    const res = await request(app)
      .get('/cats')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(100)
  })
})