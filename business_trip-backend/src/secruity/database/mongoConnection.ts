import { connect, ConnectionOptions } from "mongoose";

const connectMongo = async () => {
    try {
        const mongoUri: string = process.env.mongoBusinessTripURI;
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        await connect(mongoUri, options);
        console.debug("MongoDB connected...")
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectMongo
