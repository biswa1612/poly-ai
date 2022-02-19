import mongoose from 'mongoose';
import shortid  from 'shortid';
const textSchemma = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
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