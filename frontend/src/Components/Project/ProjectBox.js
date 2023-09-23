import React from 'react';

const ProjectBox = ({ project }) => {
  return (
    <div className="project-box">
      <p className='font-medium'>Title</p>
      <p className='font-bold text-xl'>{project.Project.Title}</p>

      <p className='pt-3 font-medium'>Project.Technologies</p>
      <p className='font-light'>{project.Project.Technologies}</p>

      <p className='pt-3 font-medium'>Technical_Skillset.Frontend</p>
      <p className='font-light'>{project.Technical_Skillset.Frontend}</p>

      <p className='pt-3 font-medium'>Technical_Skillset.Backend</p>
      <p className='font-light'>{project.Technical_Skillset.Backend}</p>

      <p className='pt-3 font-medium'>Technical_Skillset.Databases</p>
      {
        project.Technical_Skillset.Databases ?
          <p className='font-light'>{project.Technical_Skillset.Databases}</p> :
          <p>-</p>
      }

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

