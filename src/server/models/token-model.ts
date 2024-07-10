import mongoose from "mongoose";
import { Schema } from 'mongoose';

const TokenSchema = new mongoose.Schema({
    admin: { type: Schema.Types.ObjectId, required: true, ref: 'Admin'},
    refreshToken: { type: String, required: true },
})

export const Token = mongoose.models?.Token || mongoose.model("Token", TokenSchema);