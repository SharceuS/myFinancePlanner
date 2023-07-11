import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"

// Controllers
import { listRecord, addRecord, viewRecord, deleteRecord } from "./controllers/finance.controller"

const uri = "mongodb+srv://sharceus14:JQ1Esr1DwH8In67M@datacluster.63gytmz.mongodb.net/?retryWrites=true&w=majority"
const port = 80

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB')
    // Add further code for interacting with the database
  })
  .catch(error => {
    console.error('Error connecting to MongoDB', error)
  })

app.use("/list-record").get(listRecord)
// app.use("/view-record").get(viewRecord)
// app.use("/add-record").post(addRecord)
// app.use("/delete-record").post(deleteRecord)
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

















/*

Finance Planner:

1) Login should be there
2) Only 1 page: Dashboard having
	- A textbox field containing payment made today
	- A textbox field containing target save you want to make monthly
	- A list of all days in a month in tabular form displaying what days were finished, what day it is currently, and what hasnt been processed yet. 
      The existing date will contain money used, it will only display (read only). The current day one can add in the pay. New day nothing can be clicked.
	- Left and Right button on the end of the page middle corner, to switch the month
	- A textbox stating how much behind or ahead you are in the current month
	- A textbox field containing the salary day
	- A textbox field containing monthly fees and calculate accordingly

*/