const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    imgUrl: String,
    location: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});


module.exports = mongoose.model('Post', PostSchema);