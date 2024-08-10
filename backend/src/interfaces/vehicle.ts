import mongoose from "mongoose";
export interface Drive {
    transmissionPressure: number;
    pedalSensor: number;
    brakeControl: number;
}
export interface Engine {
    oilPressure: number;
    temparature: number;
    speed: number;
}
export interface Fuel {
    pressure: number;
    level: number;
    temperature: number;
    waterInFuel: number;
}
export interface Misc {
    hydraulicPumpRate: number;
    exhaustGasTemparature: number;
    systemVoltage: number;
    airFilterPressure: number;
}
export interface vehicle {
    purchaseDate: mongoose.Schema.Types.Date;
    lastServiceDate: mongoose.Schema.Types.Date;
    model: mongoose.Schema.Types.String;
    drive: mongoose.Schema.Types.Subdocument;
    engine: mongoose.Schema.Types.Subdocument;
    fuel: mongoose.Schema.Types.Subdocument;
    misc: mongoose.Schema.Types.Subdocument;
}
