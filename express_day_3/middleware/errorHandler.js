module.exports = (err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack);

  res.status(500).json({
    error: "Something went wrong on the server. Please try again later."
  });
};
