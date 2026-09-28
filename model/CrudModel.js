import mongoose from "mongoose";

const CrudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const CrudModel = mongoose.models.crud || mongoose.model("crud", CrudSchema);
export default CrudModel;
