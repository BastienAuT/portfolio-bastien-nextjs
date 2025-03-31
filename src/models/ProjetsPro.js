import mongoose from "mongoose";

const { Schema } = mongoose;

const projetSchemaPro = new Schema(
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
  {
    timestamps: true,
    collection: "projetspro", // Spécifiez le nom exact de la collection
  }
);

const ProjetsPro =
  mongoose.models.ProjetsPro || mongoose.model("ProjetsPro", projetSchemaPro);

export default ProjetsPro;
