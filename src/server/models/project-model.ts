import mongoose from "mongoose";

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

const photoSchema = new mongoose.Schema({
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
    photoSlider: { type: [photoSchema], default: undefined },
    contentSlider: { type: [contentSliderSchema], default: undefined },
    content: { type: [contentSchema], default: undefined },
    services: { type: [serviceSchema], default: undefined },
    gallery: { type: [photoSchema], default: undefined },
    images: { type: [photoSchema], default: undefined }
});

const userInfoSchema = new mongoose.Schema({
    value: { type: String, unique: true, max: 30 },
    label: { type: String, unique: true, max: 30 },
    desc: { type: String, unique: true, max: 30 },
});

const ProjectSchema = new mongoose.Schema(
    {
        user: {
            userPhoto: {
                type: photoSchema,
                default: { url: "", public_id: "" }
            },
            userInfo: {
                type: [userInfoSchema],
                default: [
                    { value: "Вася", label: "firstName", desc: "Имя" },
                    { value: "Пупкин", label: "lastName", desc: "Фамилия" },
                    { value: "user@mail.ru", label: "email", desc: "Почта" },
                    { value: "8885553535", label: "phone", desc: "Телефон" },
                    { value: "8888444455552222", label: "card", desc: "Карта" }
                ]
            },
        },
        main: {
            type: [sectionSchema], default: [
                {
                    content:[],
                    photoSlider: undefined,
                    contentSlider: undefined,
                    services: undefined,
                    gallery: undefined,
                    images: undefined,
                },
                {
                    content:[],
                    photoSlider: undefined,
                    contentSlider: undefined,
                    services: undefined,
                    gallery: undefined,
                    images: [],
                },
                {
                    content:undefined,
                    photoSlider: undefined,
                    contentSlider: undefined,
                    services: undefined,
                    gallery: [],
                    images: undefined,
                },
                {
                    content:undefined,
                    photoSlider: undefined,
                    contentSlider: undefined,
                    services: [],
                    gallery: undefined,
                    images: undefined,
                },
            ]
        },
    }
)

export const Project = mongoose.models?.Project || mongoose.model("Project", ProjectSchema);

const checkContent = async () => {
    const Project = mongoose.model('Project')
    const content = await Project.findOne()
    if (!content) {
        const contents = new Project()
        contents.save()
    }
}

checkContent()