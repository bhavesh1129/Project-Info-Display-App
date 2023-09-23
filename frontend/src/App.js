import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectBox from './Components/Project/ProjectBox';
import ProjectDetailsModal from './Components/Project/ProjectDetailsModal';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults(projects);
    } else {
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
      <SearchBar onSearch={handleSearch} />
      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-lg shadow-lg p-4 border mx-2 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <ProjectBox project={project} />
          </div>
        ))}
      </div>
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default App;
