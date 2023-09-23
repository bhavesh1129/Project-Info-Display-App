import mongoose from "mongoose";

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

const Project = mongoose.model('Project', projectSchema);

export default Project;