const express = require('express');

const server = express();

const db = require('../data/db-config.js');

server.use(express.json());

server.get('/cars', async (req, res) => {
  try {
    res.status(200).json(await db('cars'));
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: "The cars information could not be retrieved."
    });
  }
});

server.post('/cars', async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      res.status(400).json({
        message: "missing car data"
      });
    } else if (!req.body.VIN ||
               !req.body.make ||
               !req.body.model ||
               !req.body.milage) {
      res.status(400).json({
        message: "missing required data fields: name and budget"
      });
    } else {
      const [carID] = await db('cars').insert(req.body);
      res.status(201).json(carID);
    }
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      errorMessage: "The car could not be created"
    });
  }
});

module.exports = server;
