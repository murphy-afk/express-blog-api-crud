function timeLimit(req, res, next) {
  const curTime = new Date().getHours();

  if (curTime > 23 || curTime < 6) {
    console.log(`time limit check hour: ${curTime}`);
    return res.send('Sorry this service is only available between 6AM and 11PM')
  };
  next();
}
export { timeLimit }