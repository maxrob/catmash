import { Request, Response } from 'express';
import { Cat } from '../models/cat';

const DEFAULT_FIGHTS_LIMIT = 20;

const getCats = async (req: Request, res: Response) => {
  const cats = await Cat.find();
  res.json(cats.sort((a, b) => (a.score <= b.score ? 1 : -1)));
};

const getCatsMashes = async (req: Request, res: Response) => {
  const limit: number = req.query.limit || DEFAULT_FIGHTS_LIMIT;
  let catsMashes = [];
  for (let i = 0; i < limit; i++) {
    const catsMash = await getCatsMash();
    catsMashes = [...catsMashes, catsMash];
  }
  res.json(catsMashes);
};

const getCatsMash = async () => {
  return Cat.aggregate([{ $sample: { size: 2 } }]);
};

const addCatPoint = async (req: Request, res: Response) => {
  try {
    const response = await Cat.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { score: 1 } },
      { new: true }
    );
    res.json(response);
  } catch (err) {
    res.status(500).send('Error during cat update');
  }
};

export { getCats, getCatsMashes, addCatPoint };
