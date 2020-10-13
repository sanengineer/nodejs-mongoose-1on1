const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Device = mongoose.model(
  "Device",
  new mongoose.Schema({
    name: String,
    storage: String,
    color: String,
    code: String,
    brand: {
      type: ObjectId,
      ref: "Brand",
      required: true,
    },
  })
);

module.exports = Device;
