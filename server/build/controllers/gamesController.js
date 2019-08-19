"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // en vez de pool se puede nombrar como db, o database
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
            // res.json({text: 'Listando    un juego'});
        });
    }
    getOne(req, res) {
        res.json({ text: 'Mostrando el juego ' + req.params.id });
    }
    // las consultas a una db son eventos asincronos , es decir que va a tomar un tiempo el poder realizarlo
    // esta es una funcion asincrono (async) , y no devuelve nada, pero como una promesa, entonces se pondria de la siguiente manera
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            yield database_1.default.query('INSERT INTO games set ?', [req.body]); // (con referencia al await), esta linea va a tomar tiempp, cuando termine continuas con lo de abajo
            res.json({ message: 'Juego Guardado' });
        });
    }
    update(req, res) {
        res.json({ text: 'Actualizando juego ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando un juego ' + req.params.id });
    }
}
const gamesController = new GamesController();
// exporta la instanciacion 
exports.default = gamesController;
