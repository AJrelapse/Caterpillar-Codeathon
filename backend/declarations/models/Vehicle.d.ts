import mongoose from "mongoose";
import { vehicle } from "../interfaces/declarartions.js";
declare const Vehicle: mongoose.Model<vehicle, {}, {}, {}, mongoose.Document<unknown, {}, vehicle> & vehicle & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<vehicle, mongoose.Model<vehicle, any, any, any, mongoose.Document<unknown, any, vehicle> & vehicle & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, vehicle, mongoose.Document<unknown, {}, mongoose.FlatRecord<vehicle>> & mongoose.FlatRecord<vehicle> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Vehicle;
