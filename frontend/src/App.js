// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectBox from './Components/Project/ProjectBox';
import ProjectDetailsModal from './Components/Project/ProjectDetailsModal';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  // Define state variables for the component
  const [projects, setProjects] = useState([]); // Store the list of projects
  const [selectedProject, setSelectedProject] = useState(null); // Store the currently selected project
  const [isModalOpen, setIsModalOpen] = useState(false); // Track whether the project details modal is open
  const [searchResults, setSearchResults] = useState([]); // Store the filtered search results

  // Fetch the list of projects from the server when the component mounts
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URI}/projects`)
      .then((response) => {
        setProjects(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  // Function to open the project details modal
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close the project details modal
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Function to handle search input and filter projects accordingly
  const handleSearch = (query) => {
    if (query.trim() === '') {
      // If the search query is empty, show all projects
      setSearchResults(projects);
    } else {
      // Filter projects based on the search query (case-insensitive)
      const filteredProjects = projects.filter(
        (project) =>
          project.Project.Title.toLowerCase().includes(query.toLowerCase()) ||
          project.Project.Technologies.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProjects);
    }
  };

  return (
    <div className="App mt-4">
      {/* Render the search bar component */}
      <SearchBar onSearch={handleSearch} />
      {/* Render a grid of project boxes */}
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-lg shadow-lg p-4 border mx-2 cursor-pointer"
            onClick={() => openModal(project)}
          >
            {/* Render individual project boxes */}
            <ProjectBox project={project} />
          </div>
        ))}
      </div>
      {/* Render the project details modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default App;