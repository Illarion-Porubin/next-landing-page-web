import mongoose from "mongoose";

// const PagesNameSchema = new mongoose.Schema({
//     title: { type: String, unique: true },
//     page: { type: String, unique: true },
//     link: { type: String, unique: true },
// });

const contentSchema = new mongoose.Schema({
    value: { type: String },
    type: { type: String },
    explan: { type: String },
    label: { type: String }
});

const contentSliderSchema = new mongoose.Schema({
    url: { type: String },
    public_id: { type: String },
    value: { type: String }
});

const photoSliderSchema = new mongoose.Schema({
    url: { type: String, },
    public_id: { type: String }
});

const serviceSchema = new mongoose.Schema({
    desc: { type: String },
    url: { type: String },
    price: { type: String },
    title: { type: String }
});

const sectionSchema = new mongoose.Schema({
    photoSlider: [photoSliderSchema],
    contentSlider: [contentSliderSchema],
    content: [contentSchema],
    services: [serviceSchema],
    gallery: [photoSliderSchema],
    images: [photoSliderSchema]
});

const userInfoSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String }, 
    phone: { type: String },
    card: { type: String }
});


const ProjectSchema = new mongoose.Schema(
    {
        userInfo: {
            type: [userInfoSchema],
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
        // menu: {
        //     type: [PagesNameSchema],
        //     default: [
        //         { title: 'пользователь', link: "/admin/user", page: 'user' },
        //         { title: 'главная', link: "/admin/main", page: 'main' },
        //         { title: 'обо мне', link: "/admin/about", page: 'about' },
        //         { title: 'контакты', link: "/admin/contacts", page: 'contacts' }
        //     ]
        // },
        main: {
            type: [sectionSchema], default: [{}]
        },
    }
)

export const Project = mongoose.models?.Project || mongoose.model("Project", ProjectSchema);

const checkContent = async () => {
    console.log('Project <<<<<<<<');
    const Project = mongoose.model('Project')
    const content = await Project.findOne()
    if (!content) {
        const contents = new Project()
        contents.save()
    }
}

checkContent()