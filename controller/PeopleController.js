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

export const createPeople = async (req, res) => {
  const { name, address, gender } = req.body;

  if (!name || !address || !gender) {
    return res.status(400).json({
      message: "Please provide name, address and gender",
    });
  }
  const data = await CrudModel.create({
    name,
    address,
    gender,
  });

  res.status(201).json({
    success: true,
    data,
  });
};

export const updatePeople = async (req, res) => {
  const { id } = req.params;

  const people = await CrudModel.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true, runValidators: true },
  );
  if (!people) {
    return res
      .status(400)
      .json({ success: false, message: "People not found" });
  }
  res.status(200).json({ success: true, message: "Updated successfully" });
};

export const deletePeople = async (req, res) => {
  const { id } = req.params;
  const people = await CrudModel.findByIdAndDelete(id);
  if (!people) {
    res.status(400).json({ success: false, message: "People not found" });
  }
  res.status(200).json({ success: true, message: "Deleted successfully" });
};

export const searchPeople = async (req, res) => {
  const { search, limit } = req.query;
  const people = await CrudModel.find({});
  let searchedPeople = [...people];

  if (search) {
    searchedPeople = searchedPeople.filter((person) => {
      return person.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }

  if (limit) {
    searchedPeople = searchedPeople.slice(0, Number(limit));
  }
  if (searchedPeople.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.json(searchedPeople);
};