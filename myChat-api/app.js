const express = require('express');
const path = require('path');
const http = require('http');
const apiRouter = require('./routes/api');

// On crée l'application express
const app = express();

// On veut ouvrir des routes sur la route principale "/api"
app.use('/api', apiRouter);

// On dit que le dossier public doit être la racine pour les fichiers statiques
app.use(express.static('public'))

// Crée un serveur HTTP
const server = http.createServer(app);

// On allume le serveur au port 3000
server.listen(3000);

// Quand le serveur est allumé on le log
server.on('listening', function () {
    console.log("Le serveur est allumé");
});

// Si il y a une erreur on la log
server.on('error', function (error) {
    console.error(error);
});

// Utilisé pour exporter l'application comme module
module.exports = app;