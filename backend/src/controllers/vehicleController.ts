import { Request, Response } from 'express';

export async function purchaseController(req: Request, res: Response): Promise<void>{
    const { purchaseDate, lastServiceDate, model, engine, drive, fuel, misc } = req.body;
    console.log(purchaseDate, lastServiceDate, model, engine, drive, fuel, misc);
    res.send('Vehicle Purchased!');
    
}

/* export async function submitController(req: Request, res: Response): Promise<void>{
    const { purchaseDate, lastServiceDate, model, engine, drive, fuel, misc } = req.body;
    if
} */