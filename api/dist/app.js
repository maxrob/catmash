"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cats_1 = require("./controllers/cats");
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT || 3000;
app.get('/cats/fights', cats_1.getCatsFights);
app.post('/cats/:id/add_point', cats_1.addCatPoint);
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map