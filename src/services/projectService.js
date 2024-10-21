const { model } = require('mongoose');
const Project = require('../models/projectModel'); 

module.exports = {
    getAllProjects: async () => { 
       return await Project.find(); 
    },

    createProject: async (name, description, startDate, endDate, status, budget) => { // Parámetros a los de un proyecto
       const project = new Project({ name, description, startDate, endDate, status, budget }); // Creacion un proyecto con los atributos
       return await project.save(); // Guardar el proyecto
    },

    updateProject: async (_id, name, description, startDate, endDate, status, budget) => { // Actualización de proyecto 
        return await Project.findByIdAndUpdate(_id, { name, description, startDate, endDate, status, budget }); 
    },

    deleteProject: async (_id) => { 
        return await Project.findByIdAndDelete(_id); // Eliminar el proyecto por su ID
    }
};
