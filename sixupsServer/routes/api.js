let router       = require('express').Router();
const Users      = require('../controller/users');
let user = new Users();

/**
 * @API endpoints
 * Users Route
 **/
router.get('/u', user.getUsers)
    .get('/u/:id', user.getUser)
    .post('/u', user.addUser)
    .put('/u/:id', user.updateUser)
    .delete('/u/:id', user.deleteUser);

module.exports = router;
