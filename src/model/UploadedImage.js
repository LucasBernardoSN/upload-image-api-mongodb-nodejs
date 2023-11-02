const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const UploadedImage = new Schema({
  title: { type: String },
  fileName: { type: String },
});

module.exports = mongoose.model("UploadedImage", UploadedImage);
