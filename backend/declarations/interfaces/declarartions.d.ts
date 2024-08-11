import mongoose from "mongoose";
export interface Drive {
    transmissionPressure: mongoose.Schema.Types.Number;
    pedalSensor: mongoose.Schema.Types.Number;
    brakeControl: mongoose.Schema.Types.Number;
}
export interface Engine {
    oilPressure: mongoose.Schema.Types.Number;
    temparature: mongoose.Schema.Types.Number;
    speed: mongoose.Schema.Types.Number;
}
export interface Fuel {
    pressure: mongoose.Schema.Types.Number;
    level: mongoose.Schema.Types.Number;
    temperature: mongoose.Schema.Types.Number;
    waterInFuel: mongoose.Schema.Types.Number;
}
export interface Misc {
    hydraulicPumpRate: mongoose.Schema.Types.Number;
    exhaustGasTemparature: mongoose.Schema.Types.Number;
    systemVoltage: mongoose.Schema.Types.Number;
    airFilterPressure: mongoose.Schema.Types.Number;
}
export interface vehicle {
    purchaseDate: mongoose.Schema.Types.Date;
    lastServiceDate: mongoose.Schema.Types.Date;
    owner: mongoose.Schema.Types.ObjectId;
    model: mongoose.Schema.Types.String;
    vehicle_id: mongoose.Schema.Types.String;
    components: component[];
}
export interface component {
    engine: mongoose.Schema.Types.Subdocument extends Engine ?  : ;
    drive: mongoose.Schema.Types.Subdocument extends Drive ?  : ;
    fuel: mongoose.Schema.Types.Subdocument extends Fuel ?  : ;
    misc: mongoose.Schema.Types.Subdocument extends Misc ?  : ;
    serviceDate: mongoose.Schema.Types.Date;
}
