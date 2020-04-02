const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentesController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', function(req, res) {
    SessionController.create
});

routes.get('/ongs', OngController.index);
routes.post('/ongs', function(req, res) {
    OngController.create
});

routes.get('/profile', ProfileController.index);

routes.get('/incidentes', IncidentesController.index);
routes.post('/incidentes', function(req, res) {
    IncidentesController.create
});
routes.delete('/incidents/:id', IncidentesController.delete);

module.exports = routes;