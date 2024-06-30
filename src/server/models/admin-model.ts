import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      max: 20,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActivated: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);


export const User = mongoose.models?.User || mongoose.model("User", UserSchema);