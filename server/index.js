const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");

const { Pool } = require('pg');
const pool = new Pool({
   user: "postgres",
   password: "database987",
   host: "sd-database.cbhtm0wsmte2.us-east-2.rds.amazonaws.com",
   port: 5432,
   database: "sd_database"
});

// Middleware

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(express.json()); 

//HTTP Request: GET for pressure dataﬁ
app.get('/data', (req, res) => {
   pool.query('SELECT * FROM pressure_data', (error, result) => {
     if (error) {
       console.error(error);
       res.status(500).json({ message: 'Internal server error' });
     } else {
       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
       res.json(result.rows);
     }
   });
 });


// HTTP request: GET user login information & POST
app.get('/login', (req, res) => {
  pool.query('SELECT * FROM user_login', (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      const users = result.rows.map((row) => {
        const { username, password } = row;
        return { username, passwordHash: password };
      });
      res.json(users);
    }
  });
});

//HTTP Request: POST send username and password to database to compare. 

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  pool.query('SELECT * FROM user_login WHERE username = $1', [username], async (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const user = result.rows[0];
      if (!user) {
        res.status(400).json({ message: 'Invalid username or password' });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          res.json({ message: 'Login successful' });
        } else {
          res.status(400).json({ message: 'Invalid username or password' });
        }
      }
    }
  });
});

//starts server & listens for incoming request on port 3001
app.listen(3001, () => {
    console.log("server has started on port 3001");
});




//  app.get('/login', (req, res) => {
//   pool.query('SELECT * FROM user_login', (error, result) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     } else {
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//       res.json(result.rows);
//     }
//   });
// });

// app.get('/login', async (req, res) => {
//   try {
//     const users = await username.find({}, { _id: 0, password: 0 });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

// const express = require("express");
// const app = express();
// const cors = require("cors");
// //const pool = require("./db");

// const { Pool } = require('pg');
// const pool = new Pool({
//    user: "postgres",
//    password: "database987",
//    host: "sd-database.cbhtm0wsmte2.us-east-2.rds.amazonaws.com",
//    port: 5432,
//    database: "sd_database"
// });
// // Define an API endpoint that returns data from the database
// app.get('/api/data', (req, res) => {
//    // Query the database using the Pool object
//    pool.query('SELECT * FROM pressure_data', (error, result) => {
//      if (error) {
//        // Handle any errors that occur during the query
//        console.error(error);
//        res.status(500).json({ message: 'Internal server error' });
//      } else {
//        // Return the query results as a JSON response
//        res.json(result.rows);
//      }
//    });
//  });

//  app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

// // const corsOptions = {
// //   origin: ['http://localhost:3001', 'http://localhost:3000']
// // };
// // app.use(cors(corsOptions));

// // app.use(cors({
// //   origin: 'http://localhost:3000',
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Allow-Headers'],
// //   maxAge: 3600
// // }));

// //middleware
// //app.use(cors());
// //app.use(express.json());

// //routes//
// //without axios
// /*app.get('/api/data', (req, res) => {
//    pool.query('SELECT * FROM my_table', (error, result) => {
//      if (error) {
//        console.error(error);
//        res.status(500).json({ error });
//      } else {
//        res.json(result.rows);
//      }
//    });
//  });*/
// //get all data 
// /*app.get("/values", async(req,res)=> {
//    try {
//       const allData = await pool.query("SELECT * FROM pressure_data");
//       res.json(allData.rows);
//    } catch (err) {
//       console.error(err.message);
//    }
// })*/


// app.listen(3001, () => {
//     console.log("server has started on port 3001");
// })
