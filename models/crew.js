const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CrewSchema = new Schema({
    fullName: String,
    email: String,
    phone: String, 
    postRef: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model('Crew', CrewSchema);