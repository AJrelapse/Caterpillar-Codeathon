import mongoose, { Schema } from 'mongoose';

export interface Misc {
    hydraulicPumpRate: number;
    exhaustGasTemparature: number;
    systemVoltage: number;
    airFilterPressure: number;
}

const miscSchema = new Schema<Misc>({
    hydraulicPumpRate: { type: Number, required: true },
    exhaustGasTemparature: { type: Number, required: true },
    systemVoltage: { type: Number, required: true },
    airFilterPressure: { type: Number, required: true },
});

export default mongoose.model('Misc', miscSchema);