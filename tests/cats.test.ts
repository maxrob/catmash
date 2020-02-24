import supertest from 'supertest';
import app from '../src/app';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../src/lib/mongoose';

const request = supertest(app);

dotenv.config();

beforeAll(connectDB);

afterAll(disconnectDB);

describe('Get Cats Mashes', () => {
  it('should return a 200 response', async () => {
    const res = await request.get('/cats');
    expect(res.statusCode).toEqual(200);
  });
  it('should return list of 100 items', async () => {
    const res = await request.get('/cats');
    expect(res.body.length).toEqual(100);
  });
  it('should return list of cats with attribute name', async () => {
    const res = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('name');
  });
  it('should return list of cats with attribute avatar', async () => {
    const res = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('avatar');
  });
  it('should return list of cats with attribute score', async () => {
    const res = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('score');
  });
});

describe('Get Cats Mashes', () => {
  it('should return a 200 response', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.statusCode).toEqual(200);
  });
  it('should have a default limit to 20', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.body.length).toEqual(20);
  });
  it('should take a custom limit', async () => {
    const res = await request.get('/cats/mashes?limit=50');
    expect(res.body.length).toEqual(50);
  });
  it('should return array of two items', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.body[0].length).toEqual(2);
  });
  it('should return array of cats with attribute name', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('name');
  });
  it('should return array of cats with attribute avatar', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('avatar');
  });
  it('should return array of cats with attribute score', async () => {
    const res = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('score');
  });
});
