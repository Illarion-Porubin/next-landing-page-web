import { User, Content } from "./models";
import { connectToDb } from "./index";
import { unstable_noStore as noStore } from "next/cache";



export const getUsers = async () => {
  // noStore();
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const updateUser = async (data: { email: string, password: string }) => {
  try {
    connectToDb();
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      return 'Не найдено'
    }
    await user.updateOne({ password })
    return await User.find()
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const updateContent = async (data: { value: string | undefined, label: string }) => {
  try {
    connectToDb();
    const content = await Content.findOne();
    if (!content) {
      return 'Не найдено'
    }
    await content.updateOne({user: {...content.user, [`${data.label}`]: data.value}})
    return await Content.findOne()
  } catch (err) {
    console.log(err);
    // throw new Error("Failed to fetch user!");
  }
};


export const getContent = async () => {
  // noStore();
  try {
    connectToDb();
    const content = await Content.findOne();
    return content;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error("Failed to fetch user!");
    } else {
      console.log('Unexpected error', err);
    } 
  }
};