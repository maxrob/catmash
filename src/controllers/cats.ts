import { Request, Response } from 'express';
import Cat, { CatType } from '../models/cat.model';

const DEFAULT_FIGHTS_LIMIT = 20;

const getCats: (req: Request, res: Response) => Promise<void> = async (req: Request, res: Response) => {
  console.log("Test")
  const cats: CatType[] = await Cat.find();
  console.log("Test 2")
  console.log(cats);
  res.json(cats.sort((a, b) => (a.score <= b.score ? 1 : -1)));
};

const getCatsMashes: (req: Request, res: Response) => Promise<void> = async (req: Request, res: Response) => {
  const limit: number = req.query.limit || DEFAULT_FIGHTS_LIMIT;
  let catsMashes: CatType[] = [];
  for (let i = 0; i < limit; i++) {
    const catsMash : CatType = await getCatsMash();
    catsMashes = [...catsMashes, catsMash];
  }
  res.json(catsMashes);
};

const getCatsMash: () => Promise<CatType> = async () => {
  return Cat.aggregate([{ $sample: { size: 2 } }]);
};

const addCatPoint: (req: Request, res: Response) => Promise<void> = async (req: Request, res: Response) => {
  try {
    const response: any = await Cat.findOneAndUpdate(
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
