import mongoose, { Schema } from "mongoose";

const toolSchema = new mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tool1: {
        type: String,
        required: [true, 'Atleast one tool is required']
    },
    link1: {
        type: String,
        required: [true, 'Atlest one link is required']
    },
    tool2: {type: String},
    link2: {type: String},
    tool3: {type: String},
    link3: {type: String},
    tool4: {type: String},
    link4: {type: String},
    tags: {
        type: String,
        required: [true, 'Tags are a required Field']
    }
})

const Tool = mongoose.models.Tool || mongoose.model('Tool', toolSchema)

export default Tool