import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGears, faWrench, faToolbox, faCode } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const ProjectDetailsModal = ({ isOpen, onRequestClose, project }) => {
  const projectTitle = project ? project.Project.Title : '';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-600 opacity-98"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{projectTitle}</h2>
          <button
            onClick={onRequestClose}
            className="text-red-500 hover:text-red-700 text-2xl"
          >
            &times;
          </button>
        </div>
        {project && (
          <div className="project-details">
            <hr />
            <p className="mt-2 font-medium"><FontAwesomeIcon icon={faGears} /> Technologies</p>
            <p className="mb-2 font-light">{project.Project.Technologies}</p>

            <p className="mt-2 font-medium"><FontAwesomeIcon icon={faCode} /> Frontend</p>
            <p className="mb-2 font-light">{project.Technical_Skillset.Frontend}</p>

            <p className="mt-2 font-medium"><FontAwesomeIcon icon={faWrench} /> Backend</p>
            <p className="mb-2 font-light">{project.Technical_Skillset.Backend}</p>

            <p className="mt-2 font-medium"><FontAwesomeIcon icon={faDatabase} /> Databases</p>
            {
              project.Technical_Skillset.Databases ?
                <p className="mb-2 font-light">{project.Technical_Skillset.Databases}</p> :
                <p>-</p>
            }

            <p className="mt-2 font-medium"><FontAwesomeIcon icon={faToolbox} /> Infrastructure</p>
            {
              project.Technical_Skillset.Infrastructre ?
                <p className="mb-2 font-light">{project.Technical_Skillset.Infrastructre}</p> :
                <p>-</p>
            }
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
