import mongoose from "mongoose";
import { Schema, model } from 'mongoose';

const TokenSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: { type: String, required: true },
})

export const Token = mongoose.models?.Token || mongoose.model("Token", TokenSchema);