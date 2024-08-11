import mongoose from 'mongoose';
import { component } from '../interfaces/declarartions.js';
const componentSchema = new mongoose.Schema<component>({
    'engine': {
        transmissionPressure: { type: mongoose.Schema.Types.Number, required: true },
        pedalSensor: { type: mongoose.Schema.Types.Number, required: true },
        brakeControl: { type: mongoose.Schema.Types.Number, required: true },
    },
    'drive': {
        oilPressure: { type: mongoose.Schema.Types.Number, required: true },
        temparature: { type: mongoose.Schema.Types.Number, required: true },
        speed: { type: mongoose.Schema.Types.Number, required: true },
    },
    'fuel': {
        pressure: { type: mongoose.Schema.Types.Number, required: true },
        level: { type: mongoose.Schema.Types.Number, required: true },
        temperature: { type: mongoose.Schema.Types.Number, required: true },
        waterInFuel: { type: mongoose.Schema.Types.Number, required: true },
    },
    'misc': {
        hydraulicPumpRate: { type: mongoose.Schema.Types.Number, required: true },
        exhaustGasTemparature: { type: mongoose.Schema.Types.Number, required: true },
        systemVoltage: { type: mongoose.Schema.Types.Number, required: true },
        airFilterPressure: { type: mongoose.Schema.Types.Number, required: true },
    },
    'serviceDate': {
        type: mongoose.Schema.Types.Date,
        required: true
    },
})
const Component = mongoose.model('component', componentSchema);
export default Component;