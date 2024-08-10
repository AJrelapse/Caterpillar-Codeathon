import mongoose, { Schema } from 'mongoose';

export interface Fuel {
    pressure: number;
    level: number;
    temperature: number;
    waterInFuel: number;
}

const fuelSchema = new Schema<Fuel>({
    pressure: { type: Number, required: true },
    level: { type: Number, required: true },
    temperature: { type: Number, required: true },
    waterInFuel: { type: Number, required: true },
});

export default mongoose.model('Fuel', fuelSchema);