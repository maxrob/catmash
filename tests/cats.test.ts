import supertest from 'supertest';
import app from '../src/app';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from '../src/lib/mongoose';
import Cat, { CatType } from '../src/models/cat.model';

const request = supertest(app);

dotenv.config();

beforeAll(connectDB);

afterAll(disconnectDB);

describe('Get Cats', () => {
  it('should return a 200 response', async () => {
    const res: any = await request.get('/cats');
    expect(res.statusCode).toEqual(200);
  });
  it('should return list of cats with attribute name', async () => {
    const res: any = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('name');
  });
  it('should return list of cats with attribute avatar', async () => {
    const res: any = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('avatar');
  });
  it('should return list of cats with attribute score', async () => {
    const res: any = await request.get('/cats');
    expect(res.body[0]).toHaveProperty('score');
  });
});

describe('Get Cats Mashes', () => {
  it('should return a 200 response', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.statusCode).toEqual(200);
  });
  it('should have a default limit to 20', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.body.length).toEqual(20);
  });
  it('should take a custom limit', async () => {
    const res: any = await request.get('/cats/mashes?limit=50');
    expect(res.body.length).toEqual(50);
  });
  it('should return array of two items', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.body[0].length).toEqual(2);
  });
  it('should return array of cats with attribute name', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('name');
  });
  it('should return array of cats with attribute avatar', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('avatar');
  });
  it('should return array of cats with attribute score', async () => {
    const res: any = await request.get('/cats/mashes');
    expect(res.body[0][0]).toHaveProperty('score');
  });
});

describe('Add Cat Point', () => {
  it('should return a 200 response', async () => {
    const cat: CatType = await Cat.findOne();
    const res: any = await request.post(`/cats/${cat._id}/add_point`);
    expect(res.statusCode).toEqual(200);
  });
  it('should return cat with increment score', async () => {
    const cat: CatType = await Cat.findOne();
    const res: any = await request.post(`/cats/${cat._id}/add_point`);
    expect(res.body.score).toEqual(cat.score + 1);
  });
});
