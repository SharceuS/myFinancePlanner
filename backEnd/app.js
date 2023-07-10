import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"
import config from "./config/config"

// Controllers
import * as financeCtrl from "./controllers/finance.controller"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
MongoClient.connect(config.uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB')
    // Add further code for interacting with the database
  })
  .catch(error => {
    console.error('Error connecting to MongoDB', error)
  })

app.use("/list-data").get(financeCtrl.listRecord)

  
app.listen(port, () => {
    console.log(`Server running on port ${config.port}`)
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