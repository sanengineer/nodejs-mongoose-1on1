const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoose-1on1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connect to MongoDB.\n"))
  .catch((err) => console.error("Connection error\n", `${err}\n`));

const Brand = require("./models/Brand");
const Device = require("./models/Device");

const createBrand = function (name) {
  const brand = new Brand({
    name,
  });

  return brand.save();
};

const createDevice = function (name, storage, color, code, brand) {
  const device = new Device({
    name,
    storage,
    color,
    code,
    brand,
  });

  return device.save();
};

createBrand("Apple")
  .then((brand) => {
    console.log("> Created new Brand\n", `${brand}\n`);

    const brandId = brand._id.toString();
    return createDevice(
      "Macbook Pro",
      "128 GB",
      "Pure Black",
      brandId.substring(0, 4).toUpperCase(),
      brandId
    );
  })
  .then(() => {
    const showAllDevice = async function () {
      //   const devices = await device.find().populate("brand");

      //   const devices = await device.find().populate("brand", "-_id -__v");

      const devices = await Device.find()
        .populate("brand", "-_id -__v")
        .select("-__v");

      console.log("> All Devices\n", `${devices}\n`);
    };

    return showAllDevice();
  })
  .catch((err) => console.log(err));
