const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project' // Reference to the Project model
  },
  priority: {
    type: String,
    enum:["Low","Medium","High"],
    default:"Medium"
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done","Deleted"],
    default: "To Do",
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  ETA:{
    type:Date,

  }
});

module.exports = mongoose.model("Task", taskSchema);
