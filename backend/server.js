import express from 'express';
import connectDB from './db.js';
import projectRoutes from './routes/projectRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

// Connect to MongoDB using the imported function
connectDB();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Define your API routes
app.use('/', projectRoutes);

// Create a route to handle the search
// app.post('/search', async (req, res) => {
//     console.log(req.body);
//     try {
//         const userQuery = req.body.query;

//         // Use GPT-3.5 to generate a search query
//         const gptResponse = await openai.completions.create({
//             model: 'text-curie-001',
//             prompt: `Find me projects where ${userQuery}`,
//             max_tokens: 50,
//         });
//         console.log(gptResponse);
//         const generatedQuery = gptResponse.choices[0].text;
//         console.log('Generated Query:', generatedQuery);

//         // Fetch project data from MongoDB based on the generated query
//         const filteredProjects = await Project.find({
//             $or: [
//                 { 'Project.Technologies': { $regex: generatedQuery, $options: 'i' } },
//                 { 'Technical_Skillset.Backend': { $regex: generatedQuery, $options: 'i' } },
//             ],
//         });
//         console.log('Filtered Projects:', filteredProjects);
//         res.json(filteredProjects);
//     } catch (error) {
//         console.error('Error in search endpoint:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Start the Express.js server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
