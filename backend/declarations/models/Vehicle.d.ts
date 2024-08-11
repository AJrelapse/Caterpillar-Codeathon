import mongoose from "mongoose";
declare const Vehicle: mongoose.Model<{
    [x: string]: unknown;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    [x: string]: unknown;
}> & {
    [x: string]: unknown;
} & Required<{
    _id: unknown;
}>, mongoose.Schema<vehicle, mongoose.Model<vehicle, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    [x: string]: unknown;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    [x: string]: unknown;
}>> & mongoose.FlatRecord<{
    [x: string]: unknown;
}> & Required<{
    _id: unknown;
}>>>;
export default Vehicle;
