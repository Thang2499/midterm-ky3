import mongoose from "mongoose";
import Collections from "../database/collection.js";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'posts' });
const PostsModel = mongoose.model('posts', postSchema);
export default PostsModel;