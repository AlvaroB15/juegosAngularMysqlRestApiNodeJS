import {Request, Response} from 'express';

import pool from '../database' // en vez de pool se puede nombrar como db, o database
import { request } from 'http';

class GamesController{

    public async list (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
        // res.json({text: 'Listando    un juego'});
    } 

    public getOne (req: Request, res: Response){
        res.json({text: 'Mostrando el juego '   + req.params.id  });
    } 

    // las consultas a una db son eventos asincronos , es decir que va a tomar un tiempo el poder realizarlo

    // esta es una funcion asincrono (async) , y no devuelve nada, pero como una promesa, entonces se pondria de la siguiente manera
    public async create (req: Request, res: Response): Promise <void>{
        // console.log(req.body);
        await pool.query('INSERT INTO games set ?',[req.body]); // (con referencia al await), esta linea va a tomar tiempp, cuando termine continuas con lo de abajo
        res.json({message: 'Juego Guardado'});
    } 

    public update (req: Request, res: Response){
        res.json({text: 'Actualizando juego '   + req.params.id  });
    }

    public delete (req: Request, res: Response){
        res.json({text: 'Eliminando un juego '  + req.params.id });
    } 

}

const gamesController = new GamesController();

// exporta la instanciacion 
export default gamesController;