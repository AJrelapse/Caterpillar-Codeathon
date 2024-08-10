import mongoose from "mongoose";
export interface Drive {
    transmissionPressure: mongoose.Schema.Types.Decimal128;
    pedalSensor: mongoose.Schema.Types.Decimal128;
    brakeControl: mongoose.Schema.Types.Decimal128;
}
export interface Engine {
    oilPressure: mongoose.Schema.Types.Decimal128;
    temparature: mongoose.Schema.Types.Decimal128;
    speed: mongoose.Schema.Types.Decimal128;
}
export interface Fuel {
    pressure: mongoose.Schema.Types.Decimal128;
    level: mongoose.Schema.Types.Decimal128;
    temperature: mongoose.Schema.Types.Decimal128;
    waterInFuel: mongoose.Schema.Types.Decimal128;
}
export interface Misc {
    hydraulicPumpRate: mongoose.Schema.Types.Decimal128;
    exhaustGasTemparature: mongoose.Schema.Types.Decimal128;
    systemVoltage: mongoose.Schema.Types.Decimal128;
    airFilterPressure: mongoose.Schema.Types.Decimal128;
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
