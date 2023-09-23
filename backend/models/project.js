// Import the Mongoose library for creating MongoDB schemas and models
import mongoose from "mongoose";

// Define a schema for the Project model
const projectSchema = new mongoose.Schema({
    Project: {
        Title: String,
        Technologies: String,
    },
    Technical_Skillset: {
        Frontend: String,
        Backend: String,
        Databases: String,
        Infrastructure: String,
    },
});

// Create the Project model using the defined schema
const Project = mongoose.model('Project', projectSchema);

export default Project;
