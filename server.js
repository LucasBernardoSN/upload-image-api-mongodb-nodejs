const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const uploadImage = require("./src/middlewares/upload-image");
const UploadedImage = require("./src/model/UploadedImage");

const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload-image", uploadImage.single("image"), async (req, res) => {
  console.log(req.body);

  if (req.file) {
    const uploadedImage = new UploadedImage({
      title: req.body.title,
      fileName: `${req.file.filename}`,
    });

    await uploadedImage
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  } else {
    return res.status(500).json();
  }
});

app.delete("/delete/:id/:faleName", async (req, res) => {
  console.log(123);

  fs.unlink(`./public/uploads/${req.params.faleName}`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  await UploadedImage.deleteOne({ _id: req.params.id })

    .then((response) => {
      return res.status(200).json(response);
    })

    .catch((error) => {
      return res.status(500).json(error);
    });
});

app.listen(PORT, () => {
  console.log(`==> Example server listening at http://localhost:${PORT}`);
});
