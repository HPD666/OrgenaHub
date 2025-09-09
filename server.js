const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas using environment variable
// Make sure to set MONGO_URI in Railway's Environment Variables
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB connection error:", err));

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
// Signup
app.post("/signup", async (req, res) => {
  const user = new User({ username: req.body.username });
  await user.save();
  res.json(user);
});

// Post a project
app.post("/project", async (req, res) => {
  const project = new Project({
    userId: req.body.userId,
    title: req.body.title,
    code: req.body.code
  });
  await project.save();
  res.json(project);
});

// Get all projects
app.get("/projects", async (req, res) => {
  const projects = await Project.find().populate("userId");
  res.json(projects);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/projects/:id/star", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project.stars.includes(req.body.username)) {
    project.stars.push(req.body.username);
    await project.save();
  }
  res.json(project);
});
app.post("/projects/:id/comment", async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.comments.push({ user: req.body.user, text: req.body.text });
  await project.save();
  res.json(project);
});


