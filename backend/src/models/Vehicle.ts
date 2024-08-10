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
    "owner": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    "model": {
        type: String,
        required: [true, 'Please enter a model'],
        unique: true,
        lowercase: true
    },
    'engine': {
        transmissionPressure: { type: mongoose.Schema.Types.Decimal128, required: true },
        pedalSensor: { type: mongoose.Schema.Types.Decimal128, required: true },
        brakeControl: { type: mongoose.Schema.Types.Decimal128, required: true },
    },
    'drive': {
        oilPressure: { type: mongoose.Schema.Types.Decimal128, required: true },
        temparature: { type: mongoose.Schema.Types.Decimal128, required: true },
        speed: { type: mongoose.Schema.Types.Decimal128, required: true },
    },
    'fuel': {
        pressure: { type: mongoose.Schema.Types.Decimal128, required: true },
        level: { type: mongoose.Schema.Types.Decimal128, required: true },
        temperature: { type: mongoose.Schema.Types.Decimal128, required: true },
        waterInFuel: { type: mongoose.Schema.Types.Decimal128, required: true },
    },
    'misc': {
        hydraulicPumpRate: { type: mongoose.Schema.Types.Decimal128, required: true },
        exhaustGasTemparature: { type: mongoose.Schema.Types.Decimal128, required: true },
        systemVoltage: { type: mongoose.Schema.Types.Decimal128, required: true },
        airFilterPressure: { type: mongoose.Schema.Types.Decimal128, required: true },
    }
})

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;