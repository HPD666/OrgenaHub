const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// --- Schemas ---
const User = mongoose.model("User", new mongoose.Schema({
  username: String
}));

const Project = mongoose.model("Project", new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  code: String,
  stars: [String],
  comments: [{ user: String, text: String }],
  createdAt: { type: Date, default: Date.now }
}));

// --- Routes ---
app.post("/signup", async (req, res) => {
  const user = new User({ username: req.body.username });
  await user.save();
  res.json(user);
});

app.post("/project", async (req, res) => {
  const project = new Project({
    userId: req.body.userId,
    title: req.body.title,
    code: req.body.code
  });
  await project.save();
  res.json(project);
});

app.get("/projects", async (req, res) => {
  const projects = await Project.find().populate("userId");
  res.json(projects);
});

app.listen(process.env.PORT || 3000, () => console.log("Server running"));
