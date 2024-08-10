import mongoose, { Schema } from 'mongoose';

export interface Drive {
    transmissionPressure: number;
    pedalSensor: number;
    brakeControl: number;
}

const driveSchema = new Schema<Drive>({
    transmissionPressure: { type: Number, required: true },
    pedalSensor: { type: Number, required: true },
    brakeControl: { type: Number, required: true },
});

export default mongoose.model('Drive', driveSchema);