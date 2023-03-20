// This is logic is used to control the error
exports.error = (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
  res
    .status(404)
    .render("error", { pageTitle: "PAGE NOT FOUND", path: "Error" });
};
