import mongoose from "mongoose";

const PagesNameSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    page: {
        type: String,
    },
    link: {
        type: String,
    },
});

// const contentSchema = new mongoose.Schema({
//     value: { type: String },
//     type: { type: String, required: true },
//     explan: { type: String, required: true },
//     label: { type: String, required: true }
// });

// const contentSliderSchema = new mongoose.Schema({
//     link: { type: String },
//     value: { type: String }
// });

// const servicesSliderSchema = new mongoose.Schema({
//     desc: { type: String },
//     image: { type: String },
//     price: { type: String },
//     title: { type: String },
// });

// const sectionSchema = new mongoose.Schema({
//     photoSlider: { type: [String], default: ["/", "/"] },
//     contentSlider: { type: [contentSliderSchema], default: [{ link: "/", value: "" }, { link: "/", value: "" }] },
//     services: {
//         type: [servicesSliderSchema],
//         default: [
//             { desc: "desc", image: "/", price: "100", title: "title" },
//             { desc: "desc", image: "/", price: "200", title: "title" },
//             { desc: "desc", image: "/", price: "3100", title: "title" }
//         ]
//     },
//     content: {
//         type: [contentSchema],
//         default: [
//             { value: "", type: "decr", explan: "описаие", label: "description" },
//             { value: "", type: "text", explan: "первая часть заголовка", label: "title_firstPart" },
//             { value: "", type: "text", explan: "вторая часть заголовка", label: "title_secondPart" }
//         ]
//     }
// });

const ProjectSchema = new mongoose.Schema(
    {
        userInfo: {
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
        menu: {
            type: [PagesNameSchema],
            default: [
                { title: 'пользователь', link: "/admin/user", page: 'user' },
                { title: 'главная', link: "/admin/main", page: 'main' },
                { title: 'обо мне', link: "/admin/about", page: 'about' },
                { title: 'контакты', link: "/admin/contacts", page: 'contacts' }
            ]
        },
        main: { 
            // type: [sectionSchema], default: [{}] 
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