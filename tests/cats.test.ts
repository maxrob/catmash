import supertest from 'supertest';
import app from '../src/app';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../src/lib/mongoose';

const request = supertest(app);

dotenv.config();

beforeAll(connectDB);

afterAll(disconnectDB);

describe('Get Cats', () => {
  it('should return list of cats', async done => {
    const res = await request.get('/cats');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(100);
    done();
  });
});
