import CrudModel from "../model/CrudModel.js";

export const getPeople = async (req, res) => {
  const data = await CrudModel.find({});
  res.json({ success: true, data: data });
};

 export const getPeopleById = async (req, res) => {
  const { id } = req.params;
  const people = await CrudModel.findById(id);
  if (!people) {
    res.status(400).json({ success: false, message: "People not found" });
  }
  res.status(200).json({ success: true, data: people });
};