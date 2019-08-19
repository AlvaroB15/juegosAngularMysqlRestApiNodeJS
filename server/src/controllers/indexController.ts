import {Request, Response} from 'express';

class IndexController{

    index (req: Request, res: Response){
        res.send('Hola indexController o indexRouter')
    } 
    
}

// exporta la clase
export const indexController = new IndexController();