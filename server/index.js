const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes//


//get all data 
app.get("/values", async(req,res)=> {
   try {
      const allData = await pool.query("SELECT * FROM pressure_data");
      res.json(allData.rows);
   } catch (err) {
      console.error(err.message);
   }
})

// get one todo using get with specific id
app.get("/todos/:id", async(req,res) => {
   try {
      const {id} = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
      res.json(todo.rows[0])
   } catch (err) {
      console.error(err.message);
   }
})

//get one pressure value


app.listen(3000, () => {
    console.log("server has started on port 3000");
})