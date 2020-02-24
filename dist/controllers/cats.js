"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_FIGHTS_LIMIT = 20;
const getCatsFights = (req, res) => {
    const limit = req.query.limit || DEFAULT_FIGHTS_LIMIT;
    res.json(`La liste de ${limit} combats`);
};
exports.getCatsFights = getCatsFights;
const addCatPoint = (req, res) => {
    res.json(`Je viens d'ajouter un point pour l'id : ${req.params.id}`);
};
exports.addCatPoint = addCatPoint;
//# sourceMappingURL=cats.js.map