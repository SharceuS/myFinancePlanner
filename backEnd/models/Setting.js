import mongoose from "mongoose"

const Schema = mongoose.Schema

const setting = new Schema({
    salary: {
        type: Number,
        default: 0
    },
    salaryDate: {
        type: String,
        default: ""
    },
    targetSaving: {
        type: Number,
        default: 0
    },
    feesMonthly: {
        type: 0,
        default: 0
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Setting = mongoose.model("setting", setting, "setting")
module.exports = Setting