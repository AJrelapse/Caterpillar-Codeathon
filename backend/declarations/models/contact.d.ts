import mongoose from "mongoose";
declare const Contact: mongoose.Model<{
    username: string;
    email: string;
    password: string;
    booking: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    booking: Date;
}> & {
    username: string;
    email: string;
    password: string;
    booking: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    password: string;
    booking: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
    booking: Date;
}>> & mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
    booking: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default Contact;
