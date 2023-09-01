const express= require('express');
const router = express.Router();

//import controller
const {createTodo}=require('../controllers/createTodo');
const {getTodoById,getTodo} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

//define API routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodo);
router.get('/getTodos/:id',getTodoById);
router.get('/updateTodo/:id',updateTodo);
router.get('/deleteTodo/:id', deleteTodo);

module.exports= router;