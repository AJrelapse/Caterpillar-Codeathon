import mongooose from "mongoose";

export function connectDB(): void {
    mongooose.connect(process.env.DB_URL as string)
    const connection = mongooose.connection;
    connection.once('open', () => {
        console.log('Database connected');
    });
}