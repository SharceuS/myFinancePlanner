import mongoose from "mongoose"
import Finance from "../models/Finance"


export const listRecord = (req, res) => {
    try {
        let data = req.body
        console.log("check the data i am getting in ListRecord: ", data)

    } catch (err) {
        return res.status(400).json({ message: "Something went wrong: " + err.message })
    }

}

export const addRecord = (req, res) => {
    try {
        let data = req.body
        console.log("check the data i am getting in AddRecord: ", data)

    } catch (err) {
        return res.status(400).json({ message: "Something went wrong: " + err.message })
    }

}

export const viewRecord = (req, res) => {
    try {
        let data = req.body
        console.log("check the data i am getting in ViewRecord: ", data)

    } catch (err) {
        return res.status(400).json({ message: "Something went wrong: " + err.message })
    }

}

export const deleteRecord = (req, res) => {
    try {
        let data = req.body
        console.log("check the data i am getting in DeleteRecord: ", data)

    } catch (err) {
        return res.status(400).json({ message: "Something went wrong: " + err.message })
    }

}