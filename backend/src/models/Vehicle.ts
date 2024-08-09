import mongoose from "mongoose";

export interface vehicle { 
    purchaseDate: mongoose.Schema.Types.Date;
    lastServiceDate: mongoose.Schema.Types.Date;
    model: mongoose.Schema.Types.String;
}

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
})

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;