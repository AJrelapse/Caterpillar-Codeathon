import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { component } from '../interfaces/declarartions.js';
import Vehicle from '../models/Vehicle.js';
import axios from 'axios';
import Contact from '../models/contact.js';

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
    const speed = req.body.Speed;
    const temparature = req.body.Temperature;
    const oilPressure = req.body.oilPressure;
    const Water = req.body.Water;
    const ftemp = req.body.temp;
    const Pressure = req.body.Pressure;
    const Level = req.body.Level;
    const Transmission = req.body.Transmission;
    const Sensor = req.body.Sensor;
    const Brake = req.body.Brake;
    const Hydraulic = req.body.Hydraulic;
    const Exhaust = req.body.Exhaust;
    const Voltage = req.body.Voltage;
    const Filter = req.body.Filter;
    
    const component: component = {
        engine: {
            speed: speed,
            temparature: temparature,
            oilPressure:oilPressure
        },
        drive: {
            transmissionPressure: Transmission,
            pedalSensor: Sensor,
            brakeControl:Brake
        },
        fuel: {
            pressure: Pressure,
            level: Level,
            temperature: ftemp,
            waterInFuel:Water
        },
        misc: {
            hydraulicPumpRate: Hydraulic,
            exhaustGasTemparature: Exhaust,
            systemVoltage:Voltage,
            airFilterPressure:Filter
        }
        ,
    };
    if (!component) {
        res.status(400).send('Component is required');
        return;
    }
    if (!vehicle_id) {
        res.status(400).send('Id is required');
        return;
    }
    if (!component.engine) {
        res.status(400).send('Engine is required');
        return;
    }
    if (!component.engine.oilPressure) {
        res.status(400).send('Oil Pressure is required');
        return;
    }
    if (!component.engine.temparature) {
        res.status(400).send('Temparature is required en');
        return;
    }
    if (!component.engine.speed) {
        res.status(400).send('Speed is required');
        return;
    }
    if (!component.drive) {
        res.status(400).send('Drive is required');
        return;
    }
    if (!component.drive.transmissionPressure) {
        res.status(400).send('Transmission Pressure is required');
        return;
    }
    if (!component.drive.pedalSensor) {
        res.status(400).send('Pedal Sensor is required');
        return;
    }
    if (!component.drive.brakeControl) {
        res.status(400).send('Brake Control is required');
        return;
    }
    if (!component.fuel) {
        res.status(400).send('Fuel is required');
        return;
    }
    if (!component.fuel.pressure) {
        res.status(400).send('Pressure is required');
        return;
    }
    if (!component.fuel.level) {
        res.status(400).send('Level is required');
        return;
    }
    if (!component.fuel.temperature) {
        res.status(400).send('Temperature is required');
        return;
    }
    if (!component.fuel.waterInFuel) {
        res.status(400).send('Water In Fuel is required');
        return;
    }
    if (!component.misc) {
        res.status(400).send('Misc is required');
        return;
    }
    if (!component.misc.hydraulicPumpRate) {
        res.status(400).send('Hydraulic Pump Rate is required');
        return;
    }
    if (!component.misc.exhaustGasTemparature) {
        res.status(400).send('Exhaust Gas Temparature is required');
        return;
    }
    if (!component.misc.systemVoltage) {
        res.status(400).send('System Voltage is required');
        return;
    }
    if (!component.misc.airFilterPressure) {
        res.status(400).send('Air Filter Pressure is required');
        return;
    }
    const serviceDate = new Date();
    console.log(component   )

    try {
        // const vehicle = await Vehicle.findById(vehicle_id);
        // if (!vehicle) {
        //     res.status(404).send('Vehicle Not Found');
        //     return;
        // }
        // vehicle.components.push(component);
        // vehicle.save();
        const prob =await submit(component,vehicle_id);
        // res.json({ prob });
        const b=prob.engine;
        const d=prob.fuel;
        const c=prob.drive;
        const a = prob.misc;
    console.log(component   )
        res.json(prob)
        // res.redirect("ttp://localhost:3001/solution?a="+a+"b="+b+"c="+c+"d="+d)
        // res.render('solution', prob);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error Submitting Component');
    }
}

async function submit(daata: component, machine_id: string): Promise<any> {
    const engine = daata['engine'];
    const drive = daata['drive'];
    const fuel = daata['fuel'];
    const misc = daata['misc'];
    var final = {};
    let data = JSON.stringify({
        "Machine": machine_id,
        "Hydraulic_Pump_Rate": misc['hydraulicPumpRate'],
        "System_Voltage": misc['systemVoltage'],
        "Exhaust_Gas_Temperature": misc['exhaustGasTemparature'],
        "Air_Filter_Pressure": misc['airFilterPressure'],
    });
    console.log(data);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:9003/',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'X-Auth-Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmIzYTA4YmQxYzNhZjc4MTU0YmUyZjEiLCJpYXQiOjE3MjMwNTAzNzQsImV4cCI6MTcyMzEzNjc3NH0.SGhB2vutnK7zfv2OHxNQVaY_tpwB_Qz2Xop04CkDmyQ'
        },
        data: data
    };
    
        try {
            const response = await axios.request(config);
            console.log(response.data);
            final['misc'] = response.data['Probabilty of failure'];
            // return final;
            // console.log(JSON.stringify(response.data));

        }
        catch (error) {
            console.log(error);
        }
    let data1 = JSON.stringify({
        "Machine": machine_id,
        "Oil_Pressure": engine['oilPressure'],
        "Temperature": engine['temparature'],
        "Speed": engine['speed']
    });
    console.log(data1);
    let config1 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:9002/',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data1
    };
    
        try {
            const response = await axios.request(config1);
            console.log(response.data);
            final['engine'] = response.data['Probabilty of failure'];
            // return final;
            // console.log(JSON.stringify(response.data));

        }
        catch (error) {
            console.log(error);
        }
    let data2 = JSON.stringify({
        "Machine": machine_id,
        "Transmission_Pressure": drive['transmissionPressure'],
        "Pedal_Sensor": drive['pedalSensor'],
        "Brake_Control": drive['brakeControl']
    });
    console.log(data2);
    let config2 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:9000/',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data2
    };
    
        try {
            const response = await axios.request(config2);
            console.log(response.data);
            final['drive'] = response.data['Probabilty of failure'];
            // return final;
            // console.log(JSON.stringify(response.data));

        }
        catch (error) {
            console.log(error);
        }
    let data3 = JSON.stringify({
        "Machine": machine_id,
        "Pressure": fuel['pressure'],
        "Level": fuel['level'],
        "Temperature": fuel['temperature'],
        "Water_Fuel": fuel['waterInFuel']
    });
    console.log(data3);
    let config3 = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:9001/',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data3
    };
    
        try {
            const response = await axios.request(config3);
            console.log(response.data);
            final['fuel'] = response.data['Result'];
            // return final;
            // console.log(JSON.stringify(response.data));

        }
        catch (error) {
            console.log(error);
        }
    return final;
}    

export function contactController(req: Request, res: Response): void {
    const { username, email, password, booking } = req.body;
    if (!username) {
        res.status(400).send('Username is required');
        return;
    }
    if (!email) {
        res.status(400).send('Email is required');
        return;
    }
    if (!password) {
        res.status(400).send('Password is required');
        return;
    }
    if (!booking) {
        res.status(400).send('booking date required');
        return;
    }
    try {
        const _con = new Contact({
            username,
            email,
            password,
            booking
        });
        res.send("Submitted Successfully");
    }
    catch (err) {
        res.status(500).send("Unable to Submit");
    }
}