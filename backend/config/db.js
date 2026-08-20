import mongoose from "mongoose";

export const connectDB = async() => {
  await mongoose.connect('mongodb+srv://aritik755_db_user:QA15QdhoI1vGql0h@cluster0.hmlvhmn.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}