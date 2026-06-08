import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "uploads/blogs";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },

  filename(req, file, cb) {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/webp") {
    cb(null, true);
  } else {
    cb(new Error("Only WEBP image is allowed"), false);
  }
};

export const uploadBlogImage = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 100 * 1024,
  },
});