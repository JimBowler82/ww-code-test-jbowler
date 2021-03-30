const R = require("ramda");

module.exports = (req, res, next) => {
  try {
    let date = req.get("x-run-date");

    //if (!date || date === "") date = "2018-04-06";
    if (R.or(R.isNil(date), R.isEmpty(date))) date = "2018-04-06";

    req.date = date;
    return next();
  } catch (e) {
    return next(new Error("Error assigning date to request :-)"));
  }
};
