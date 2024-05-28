import mongoose from "mongoose"; 
 

// Define the schema
const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

// Check if the model already exists before creating it
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
