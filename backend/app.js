require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const multer = require("multer");
const fileExtension = require("file-extension");
const cors = require("cors");
const morgan = require("morgan");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.originalname}-${Date.now()}.${fileExtension(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.post("/api/file-upload", upload.single("file"), (req, res) => {
  res.status(200).json({
    message: "File uploaded",
    uploadTime: new Date().toISOString()
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
