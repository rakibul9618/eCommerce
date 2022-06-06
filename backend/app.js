import express from 'express';
import dotenv from 'dotenv';
import colors from "colors";
import cors from 'cors';
import connectDB from "./config/db.js";
import productsRoutes from "./routes/products-routes.js";
import HttpError from "./models/http-error.js";
import notFound from "./middleware/404-middleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
dotenv.config();


const app = express();
app.use(cors());


connectDB(process.env.MONGO_URI);

app.use('/api/products', productsRoutes);

app.use(notFound);

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    const url = `http://localhost:${PORT}/`;
        console.log(`server listening on port ${PORT}`.yellow.bold);
    })

