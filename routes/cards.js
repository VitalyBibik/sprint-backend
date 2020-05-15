const routes = require('express').Router();
const { getCards, deleteCard, createCard } = require('../controllers/cards');

routes.get('/cards', getCards);
routes.post('/cards', createCard);
routes.delete('/cards/:cardId', deleteCard);


module.exports = routes;
