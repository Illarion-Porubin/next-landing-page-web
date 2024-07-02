import mongoose from "mongoose";

const about = {
  images: {
    image_0: "/",
    image_1: "/",
    image_2: "/",
  },
  textContent: [
    {value: "", type: "decr", explan: "описаие", label: "description"},
    {value: "", type: "decr", explan: "первая часть заголовка", label: "title_firstPart"},
    {value: "", type: "text", explan: "вторая часть заголовка", label: "title_secondPart"},
  ]
} 

// нужно проверить не будет ли пробелм динамичкском получении данных по ключу

// gallery || slider
const gallery = [
  {link: "/"},
  {link: "/"},
]

// services || products
const services = [
  {desc: "desc", image: "image", price: "price", title: "title"},
]

const PhotoSchema = new mongoose.Schema({
    link: { type: String }
  });
  
  const ServiceSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    }
  });
  
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
  
      project: {
        main: {
          desc: {
            type: String,
            default: "mainDesc",
            min: 20,
            max: 50,
            unique: true,
          },
          title_firstPart: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 20,
            unique: true,
          },
          title_secondPart: {
            type: String,
            default: "secondPart",
            min: 3,
            max: 20,
            unique: true,
          },
        },
        about: {
          title_firstPart: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 20,
            unique: true,
          },
          title_secondPart: {
            type: String,
            default: "secondPart",
            min: 3,
            max: 20,
            unique: true,
          },
          desc: {
            type: String,
            default: "firstPart",
            min: 200,
            max: 360,
            unique: true,
          },
          images: {
            link_1: { type: String, default: "https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg" },
            link_2: { type: String, default: "https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg" },
          }
        },
        portfolio: {
          gallery: {
            type: [PhotoSchema],
            default: [
              { link: 'https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg' },
              { link: 'https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg' }
            ]
          },
        },
        prices: {
          title: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 10,
          },
          services: {
            type: [ServiceSchema],
            default: [
              {
                title: "title",
                desc: "desc",
                price: "price",
                image: "https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg"
              },
              {
                title: "title",
                desc: "desc",
                price: "price",
                image: "https://res.cloudinary.com/dnyxxxt88/image/upload/v1718468425/vqgcohumutgserwhhkpg.jpg"
              },
            ],
          }
        },
        contacts: {
          title: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 10,
            unique: true,
          },
          desc: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 10,
            unique: true,
          },
          phone: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 10,
            unique: true,
          },
          email: {
            type: String,
            default: "firstPart",
            min: 3,
            max: 10,
            unique: true,
          },
          address: {
            type: String,
            default: "firstPart",
            max: 100,
            unique: true,
          },
        }
      },
  
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

  export const Content = mongoose.models?.Content || mongoose.model("Content", ContentSchema);

  const checkContent = async () => {
    const Contents = mongoose.model('Content')
    const content = await Contents.findOne()
    if (!content) {
      const contents = new Contents()
      contents.save()
    }
  }
  
  checkContent()