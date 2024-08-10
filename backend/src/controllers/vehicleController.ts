import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { component } from '../interfaces/declarartions';
import Vehicle from '../models/Vehicle';

export async function purchaseController(req: Request, res: Response): Promise<void>{
    const model:string = req.body.model;
    if (!model) {
        res.status(400).send('Model is required');
    }
    const purchaseDate: Date = new Date();
    const lastServiceDate: Date = purchaseDate;
    const owner = jwt.verify(req.cookies['X-Auth-Token'].jwt, process.env.SECRET_KEY as string);
    const components:Array<component> = [];
    try {
        const newVehicle = new Vehicle({
            purchaseDate,
            lastServiceDate,
            owner,
            model,
            components
        });
        newVehicle.save();
        res.send('Vehicle Purchased!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error Purchasing Vehicle');
    }
    
}

export async function submitController(req: Request, res: Response): Promise<void>{
    const model = req.body['model'];
    const vehicle_id = req.params['vehicle_id'];
    const component: component = req.body.component;
    if (!model) {
        res.status(400).send('Component is required');
        return;
    }
    if (!component.engine) {
        res.status(400).send('Engine is required');
        return;
    }

    if (!component.drive) {
        res.status(400).send('Drive is required');
        return;
    }

    if (!component.fuel) {
        res.status(400).send('Fuel is required');
        return;
    }

    if (!component.misc) {
        res.status(400).send('Misc is required');
        return;
    }

    if (!component.serviceDate) {
        res.status(400).send('Service Date is required');
        return;
    }
    try {
        const vehicle = await Vehicle.findById(vehicle_id);
        if (!vehicle) {
            res.status(404).send('Vehicle Not Found');
            return;
        }
        vehicle.components.push(component);
        vehicle.save();
        res.send('Component Submitted!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error Submitting Component');
    }
}