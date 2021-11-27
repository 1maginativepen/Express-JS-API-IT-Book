const express = require('express');
const router = express.Router();
const route_service = require('../../services/users/authLogin');
const config = require('../../config');

router.get('/', async function(req, res, next) {
  try { 

    config.loginRequest.username = req.query.user_id;
    config.loginRequest.password = req.query.user_password;  

    res.json(await route_service.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting users data `, err.message);
    next(err);
  }
});

module.exports = router;