import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    rating:{
         type: Number,
         required:true
    },
    comment:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const Review = mongoose.model('Review' , reviewsSchema);

export default Review;
