// import express from 'express';
// import { dbClient } from "../generated/db/index.js";

// const app = express();

// const globalFordb = globalThis;
// const db = globalFordb.db



// app.get("/", (req, res) => {
//     res.json({
//         status: "success",
//         message: "confirm"
//     });
// });

// app.use(express.json());

// app.post("/signup", (req, res) => {
//     const { name, password, email } = req.body;

//     if (!name || !password || !email) {
//         return res.status(400).json({
//             status: "error",
//             message: "Missing required fields"
//         });
//     }

//     // Here you would normally save the user to a database
//     // For now, just return a success response

//     res.status(201).json({
//         status: "success",
//         message: "User signed up successfully",
//         user: {
//             name,
//             email
//         }
//     });
// });


// app.post("/signin", (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({
//             status: "error",
//             message: "Missing email or password"
//         });
//     }

//     // Here you would normally check the user's credentials against a database
//     // For now, just return a success response

//     res.status(200).json({
//         status: "success",
//         message: "User signed in successfully",
//         user: {
//             name,
//             email
//         }
//     });
// });


// db.$connect()
//     .then(() => {
//         console.log('Connected to PostgreSQL with db');
//         app.listen(8080 , ()=> {
//     console.log(`app is runnong `);
// })
//     })
//     .catch((err) => {
//         console.error('db connection error:', err);
//     });


import express from 'express';
// import { db } from './db.js';
// import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";

const app = express();
const SALT_ROUNDS = 10;

app.use(express.json());
app.use(express.json());
app.use(cookieParser());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'API is running'
    });
});

// User signup endpoint
// app.post('/signup', async (req, res) => {
//     console.log("req",req);
//     const { name, password, email } = req.body;

//     if (!name || !password || !email) {
//         return res.status(400).json({
//             status: 'error',
//             message: 'Missing required fields'
//         });
//     }

//     try {
//         // Check if user already exists
//         const existingUser = await db.user.findUnique({
//             where: { email }
//         });

//         if (existingUser) {
//             return res.status(409).json({
//                 status: 'error',
//                 message: 'User with this email already exists'
//             });
//         }

//         // Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

//         // Create new user
//         const user = await db.user.create({
//             data: { name, email, password: hashedPassword }
//         });

//         res.status(201).json({
//             status: 'success',
//             message: 'User signed up successfully',
//             user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal server error'
//         });
//     }
// });

// // User signin endpoint
// app.post('/signin', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({
//             status: 'error',
//             message: 'Missing email or password'
//         });
//     }

//     try {
//         // Find user by email
//         const user = await db.user.findUnique({
//             where: { email }
//         });

//         if (!user) {
//             return res.status(401).json({
//                 status: 'error',
//                 message: 'Invalid email or password'
//             });
//         }

//         // Compare password with hashed password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({
//                 status: 'error',
//                 message: 'Invalid email or password'
//             });
//         }

//         res.status(200).json({
//             status: 'success',
//             message: 'User signed in successfully',
//             user: {
//                 id: user.id,
//                 name: user.name,
//                 email: user.email
//             }
//         });
//     } catch (error) {
//         console.error('Signin error:', error);
//         res.status(500).json({
//             status: 'error',
//             message: 'Internal server error'
//         });
//     }
// });

// Start server after connecting to the database
    try {
      
        console.log('Connected to PostgreSQL with db');
        app.listen(8000, () => {
            console.log('App is running on port 8000');
        });
    } catch (err) {
        console.error('db connection error:', err);
        process.exit(1);
    }
