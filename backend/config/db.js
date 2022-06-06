import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log(`MongoDB connect: ${mongoose.connection.host}`.cyan.underline);

    }catch (e) {
        console.log(`Error: ${e.message}`.red.underline.bold);
        process.exit(1);
    }

};

export default connectDB;