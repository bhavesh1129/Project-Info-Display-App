// Import necessary dependencies and create an Express router
import express from 'express';
const router = express.Router();
import Project from '../models/project.js'; // Import the Project model

// Define a route to fetch all projects from the database
router.get('/projects', async (req, res) => {
    try {
        // Fetch all projects from the database
        const projects = await Project.find();
        res.json(projects); // Send the projects as a JSON response
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Server error' }); // Handle errors and send a 500 status code
    }
});

export default router;
