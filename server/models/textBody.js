import mongoose from 'mongoose';

const textSchemma = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    users: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})


const textBody = mongoose.model('textBody', textSchemma);

export default textBody;