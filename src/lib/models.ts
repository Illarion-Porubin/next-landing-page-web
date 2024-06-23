import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    user: {
      firstName: {
        type: String,
        default: "firstName",
        min: 3,
        max: 20,
        unique: true,
      },
      lastName: {
        type: String,
        default: "lastName",
        min: 3,
        max: 20,
        unique: true,
      },
      email: {
        type: String,
        default: "user@mail.ru",
        unique: true,
      },
      phone: {
        type: String,
        default: "987987987",
        max: 20,
        unique: true,
      },
      card: {
        type: String,
        default: "4444888800005555",
        max: 20,
        unique: true,
      },
    },

    gallery: [
      {
        link: {
          type: String,
          default: "",
          unique: true,
        }
      },
    ],
    photoSlider: [
      {
        link: {
          type: String,
          default: "",
          unique: true,
        },
      }
    ],
    textSlider: [
      {
        title: {
          type: String,
          default: "",
          unique: true,
        },
        desc: {
          type: String,
          default: "",
          unique: true,
        },
      }
    ],
  }
)

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



export const Content = mongoose.models?.Content || mongoose.model("Content", ContentSchema);
export const User = mongoose.models?.User || mongoose.model("User", UserSchema);

const checkContent = async () => {
  const Contents = mongoose.model('Content')
  const content = await Contents.findOne() 
  if(!content){
      const contents = new Contents()
      contents.save()
  }
}

checkContent()