import express from 'express';


import { createSnippet, getSnippet, getMySnippets, deleteSnippet, editTime, Snippet } from '../controllers/snippets.js'; 
import auth from '../middleware/auth.js'; 
//import auth from '../middleware/auth.js'; //to check whether a user is logged in or not ...we are checking if token is present or not which will be there only after we login or signup and if it is there we are getting the userId from the token and setting it to req.userid and then we can perform our  next operation which is in controller or else if token is not there then we will get an error
const router = express.Router();

router.get('/mySnippets',auth, getMySnippets);
router.post('/create',auth, createSnippet);
router.post('/fetch', auth, getSnippet);
router.delete('/:id', auth, deleteSnippet);
router.patch('/:id', auth, editTime);
router.get('/history/:id',auth, Snippet);
export default router;