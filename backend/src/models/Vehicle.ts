import mongoose from "mongoose";
import { vehicle } from "../interfaces/vehicle";
const vehicleSchema = new mongoose.Schema<vehicle>({
    "purchaseDate": {
        type: Date,
        required: true
    },
    "lastServiceDate": {
        type: Date,
        required: true
    },
    "model": {
        type: String,
        required: [true, 'Please enter an model'],
        unique: true,
        lowercase: true
    },
    'engine': {
        transmissionPressure: { type: Number, required: true },
        pedalSensor: { type: Number, required: true },
        brakeControl: { type: Number, required: true },
    },
    'drive': {
        oilPressure: { type: Number, required: true },
        temparature: { type: Number, required: true },
        speed: { type: Number, required: true },
    },
    'fuel': {
        pressure: { type: Number, required: true },
        level: { type: Number, required: true },
        temperature: { type: Number, required: true },
        waterInFuel: { type: Number, required: true },
    },
    'misc': {
        hydraulicPumpRate: { type: Number, required: true },
        exhaustGasTemparature: { type: Number, required: true },
        systemVoltage: { type: Number, required: true },
        airFilterPressure: { type: Number, required: true },
    }
})

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;