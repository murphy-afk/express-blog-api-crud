function notFound(req, res, next) {
  res.status(404);
  res.json({
    err: 404,
    message: "Not Found"
  })
}
export { notFound }