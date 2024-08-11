import mongoose from "mongoose";
import { vehicle } from "../interfaces/declarartions.js";
import Component from "./components.js";
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
    "vehicle_id": {
        type: String,
        required: [true, 'Please enter a model'],
        unique: true,
        lowercase: true
    },
    'components': {
        type: [{ type: Component.schema }],
        required: true,
        default: []
    }
})

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;