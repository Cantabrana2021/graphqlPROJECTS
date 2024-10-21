const { Query } = require('mongoose');
const projectService = require('../services/projectService'); 

const resolvers = {
   Query: {
       projects: () => { 
           return projectService.getAllProjects(); // Servicio para obtener todos los proyectos
       }
   },
   Mutation: {
       CreateProject: (_, { name, description, startDate, endDate, status, budget }) => { //Parámetros para un proyecto
           return projectService.createProject(name, description, startDate, endDate, status, budget); 
       },
       UpdateProject: (_, { _id, name, description, startDate, endDate, status, budget }) => { //Parámetros para la actualización de proyectos
           return projectService.updateProject(_id, name, description, startDate, endDate, status, budget); 
       },
       DeleteProject: (_, { _id }) => { // DeleteProject
           return projectService.deleteProject(_id); // deleteProject
       }
   }
};

module.exports = resolvers;
