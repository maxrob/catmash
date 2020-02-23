import {Request, Response} from 'express' 

const DEFAULT_FIGHTS_LIMIT = 20

const getCatsFights = (req: Request, res: Response) => {
  const limit = req.query.limit || DEFAULT_FIGHTS_LIMIT
  res.json(`La liste de ${limit} combats`)
}

const addCatPoint = (req: Request, res: Response) => {
  res.json(`Je viens d'ajouter un point pour l'id : ${req.params.id}`)
} 

export {getCatsFights, addCatPoint}