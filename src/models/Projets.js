import mongoose from "mongoose";

const { Schema } = mongoose;

const projetSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Projets =
  mongoose.models.Projets || mongoose.model("Projets", projetSchema);

export default Projets;
