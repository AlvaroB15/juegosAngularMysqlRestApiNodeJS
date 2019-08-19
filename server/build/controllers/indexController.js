"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('Hola indexController o indexRouter');
    }
}
// exporta la clase
exports.indexController = new IndexController();
