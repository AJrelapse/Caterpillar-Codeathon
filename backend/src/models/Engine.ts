import mongoose, { Schema } from 'mongoose';

export interface Engine {
    oilPressure: number;
    temparature: number;
    speed: number;
}

const engineSchema = new Schema<Engine>({
    oilPressure: { type: Number, required: true },
    temparature: { type: Number, required: true },
    speed: { type: Number, required: true },
});

export default mongoose.model('Engine', engineSchema);