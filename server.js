import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
dotenv.config();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// MongoDb Connect
mongoose.connect(process.env.MONGO_URL);

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const blogPost = mongoose.model("blogPost", blogPostSchema);

app.get("/api/posts", async (req, res) => {
  const posts = await blogPost.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;
  const newPost = new blogPost({ title, content });
  await newPost.save();
});

app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(port, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT}/`
  );
});
