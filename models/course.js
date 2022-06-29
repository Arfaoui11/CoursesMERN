const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    niveau: {
        type: String,
        enum : ['DEBUTANT','INTERMEDIAIRE','AVANCE'],
        default: 'DEBUTANT',
        required:true
    },
    dateDebut: {
        type: Date,
        required:true
    },
    dateFin: {
        type: Date,
        required:true
    },
    nbrHeures: {
        type: Number,
        required:true
    },
    nbrMaxParticipant: {
        type: Number
    },
    frais: {
        type: Number,
        required:true
    },
    formateur : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Formateur"
    },
    courseApprenant :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "CourseApprenant"
    }]

},{timestamps : true});


module.exports = mongoose.model('Course', courseSchema);
