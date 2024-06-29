"use server"

import mongoose from "mongoose";


const connection: { isConnected: number } = {
  isConnected: 0,
};


export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    if(process.env.DB){
      const db = await mongoose.connect(process.env.DB);
      console.log('Connect to DB');
      connection.isConnected = db.connections[0].readyState;
    }
  } catch (error) {
    console.log(error);
  }
};

connectToDb()