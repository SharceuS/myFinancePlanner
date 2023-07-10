import mongoose from "mongoose"

const Schema = mongoose.Schema

const finance = new Schema({
    amount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Finance = mongoose.model("finance", finance, "finance")
module.exports = Finance