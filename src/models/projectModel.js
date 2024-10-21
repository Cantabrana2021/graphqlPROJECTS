const mongoose = require('mongoose');

// esquema del proyecto en MongoDB
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },         // nombre del proyecto
    description: { type: String, required: true },  // descripción del proyecto
    startDate: { type: Date, required: true },      // fecha de inicio
    endDate: { type: Date, required: true },        // fecha de fin
    status: { type: String, default: 'pendiente' }, // estado del proyecto (pendiente por defecto)
    budget: { type: Number, required: true }        // presupuesto
});

// Modelo de proyecto
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
