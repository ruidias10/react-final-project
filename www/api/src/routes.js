const express = require('express');
const routes = express.Router();

// Import Controllers
const MovieController = require('./Controllers/MovieController');
const UserController = require('./Controllers/UserController');
const HighlightController = require('./Controllers/HighlightController');


// Movies Routes
routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.show);
routes.post('/movies', MovieController.store);
routes.put('/movies/:id', MovieController.update);
routes.delete('/movies/:id', MovieController.destroy);

// Users Routes
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

// Highlights Routes
routes.get('/highlights', HighlightController.index);
routes.get('/highlights/:id', HighlightController.show);
routes.post('/highlights', HighlightController.store);
routes.put('/highlights/:id', HighlightController.update);
routes.delete('/highlights/:id', HighlightController.destroy);


routes.get('/', (req, res) => {
  return res.send('running node at:/');
});

module.exports = routes;