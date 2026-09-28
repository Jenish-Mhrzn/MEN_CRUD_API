import CrudModel from "../model/CrudModel.js";

export const getPeople = async (req, res) => {
  const data = await CrudModel.find({});
  res.json({ success: true, data: data });
};

