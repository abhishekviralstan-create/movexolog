export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  if (err.code === 11000) {
    statusCode = 400;
    err.message = "Duplicate value already exists";
  }

  if (err.message === "Only WEBP image is allowed") {
    statusCode = 400;
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    statusCode = 400;
    err.message = "Image size must be under 100kb";
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};