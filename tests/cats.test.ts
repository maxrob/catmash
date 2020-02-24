import supertest from 'supertest';
import app from '../src/server';

const request = supertest(app);

describe('Get Cats', () => {
  it('should return list of cats', async done => {
    const res = await request.get('/cats');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(100);
    done();
  });
});
