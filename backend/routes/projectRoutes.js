import express from 'express';
const router = express.Router();
import Project from '../models/project.js';

router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
