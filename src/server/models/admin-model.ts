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

const checkContent = async () => {
  console.log('Admin <<<<<<<<');
  const Admin = mongoose.model('Admin')
  const content = await Admin.findOne()
  if (!content) {
    const contents = new Admin()
    contents.save()
  }
}

checkContent()