import mongoose from 'mongoose';
import { component } from '../interfaces/declarartions.js';
declare const Component: mongoose.Model<component, {}, {}, {}, mongoose.Document<unknown, {}, component> & component & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<component, mongoose.Model<component, any, any, any, mongoose.Document<unknown, any, component> & component & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, component, mongoose.Document<unknown, {}, mongoose.FlatRecord<component>> & mongoose.FlatRecord<component> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Component;
