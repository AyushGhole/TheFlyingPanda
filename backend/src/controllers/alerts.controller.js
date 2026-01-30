import Alert from "../models/alert.model.js";

export const getAlerts = async (req, res, next) => {
  try {
    const { country, status, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (country) filter.country = country;
    if (status) filter.status = status;

    const skip = (Number(page) - 1) * Number(limit);

    const [alerts, total] = await Promise.all([
      Alert.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Alert.countDocuments(filter),
    ]);

    res.status(200).json({
      data: alerts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createAlert = async (req, res, next) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};

export const updateAlert = async (req, res, next) => {
  try {
    const updated = await Alert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteAlert = async (req, res, next) => {
  try {
    const deleted = await Alert.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json({ message: "Alert deleted successfully" });
  } catch (error) {
    next(error);
  }
};
