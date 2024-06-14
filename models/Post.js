import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        default: ""
    }, 
    personnel: {
        type: String,
        default: "",
    },
    personnelId: {
        type: String,
        default: "",
    },
});

const Posts = mongoose.model('Post', PostSchema);

export default Posts;