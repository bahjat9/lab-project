import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.js";
import courseRoute from './routes/courseRoute.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Connect our new routes!
app.use('/students', studentRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

mongoose.connect('mongodb+srv://bahjat:Bahjat2006@cluster0.osbpzkf.mongodb.net/?appName=Cluster0')
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));