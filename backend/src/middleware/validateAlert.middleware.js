const validateAlert = (req, res, next) => {
  const { country, city, visaType } = req.body;

  if (!country || !city || !visaType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  next();
};

export default validateAlert;
