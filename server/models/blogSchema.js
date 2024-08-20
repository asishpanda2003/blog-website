import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, "BLog title at least 5 charcter"],
    maxLength: [40, "BLog title at least 40 charcter"],
  },
  mainImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  intro: {
    type: String,
    required: true,
    minLength: [20, "BLog intro must contain 20 charcter"],
  },
  paraOneImage:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraOneDescription:{
    type: String,
    minLength: [100, "BLog intro must contain 250 charcter"],
  },
  paraOneTitle:{
    type:String,
    minLength: [5, "BLog title must contain 50 charcter"],
  },
  paraTwoImage:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraTwoDescription:{
    type: String,
    minLength: [10, "BLog intro must contain 250 charcter"],
  },
  paraTwoTitle:{
    type:String,
    minLength: [5, "BLog title must contain 50 charcter"],
  },
  paraThreeImage:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  paraThreeDescription:{
    type: String,
    minLength: [50, "BLog intro must contain 250 charcter"],
  },
  paraThreeTitle:{
    type:String,
    minLength: [5, "BLog title must contain 50 charcter"],
  },
  category:{
    type:String,
    required:true
  },
  createdBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true
  },
  authorName:{
    type:String,
    required:true
  },
  authorAvatar:{
    type:String,
    required:true
  },
  published:{
    type:Boolean,
    default:false
  }
});

export const Blog=mongoose.model("Blog",blogSchema);