import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      max: 20,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    accessToken: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    isActivated: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);


export const Admin = mongoose.models?.Admin || mongoose.model("Admin", AdminSchema);