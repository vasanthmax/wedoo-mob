const mongoose = require("mongoose");

const Project = new mongoose.Schema(
  {
    projectname: { type: String, required: true },
    projectstarttime: { type: Date, required: true },
    projectendtime: { type: Date, required: true },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", Project);
