import React from 'react';

// ProjectBox component displays project details
const ProjectBox = ({ project }) => {
  return (
    <div className="project-box">
      {/* Display project title */}
      <p className='font-medium'>Title</p>
      <p className='font-bold text-xl'>{project.Project.Title}</p>

      {/* Display project technologies */}
      <p className='pt-3 font-medium'>Project.Technologies</p>
      <p className='font-light'>{project.Project.Technologies}</p>

      {/* Display frontend technical skills */}
      <p className='pt-3 font-medium'>Technical_Skillset.Frontend</p>
      <p className='font-light'>{project.Technical_Skillset.Frontend}</p>

      {/* Display backend technical skills */}
      <p className='pt-3 font-medium'>Technical_Skillset.Backend</p>
      <p className='font-light'>{project.Technical_Skillset.Backend}</p>

      {/* Display database technical skills or "-" if not provided */}
      <p className='pt-3 font-medium'>Technical_Skillset.Databases</p>
      {
        project.Technical_Skillset.Databases ?
          <p className='font-light'>{project.Technical_Skillset.Databases}</p> :
          <p>-</p>
      }

      {/* Display infrastructure technical skills or "-" if not provided */}
      <p className='pt-3 font-medium'>Technical_Skillset.Infrastructre</p>
      {
        project.Technical_Skillset.Infrastructre ?
          <p className='font-light'>{project.Technical_Skillset.Infrastructre}</p> :
          <p>-</p>
      }
    </div>
  );
};

export default ProjectBox;
