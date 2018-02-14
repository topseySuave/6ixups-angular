const UserModel     = require('../models/users');
let { response }    = require('../utils');

/**
 *  @Users Class
 * **/

class Users {
    /**
     * @Users Class 
     * getting all user.
     * **/
    getUsers (req, res) {
        UserModel.find({}, (err, users) => {
            if(err) console.log(err);
            response.data = users;
            res.send(response);
        });
    }

    /**
     * @Users Class
     * getting a single user.
     * **/
    getUser(){

    }

    /**
     * @Users Class
     * Adding a user.
     * **/
    addUser(){}

    /**
     * @Users Class
     * Updating a user.
     * **/
    updateUser(){}

    /**
     * @Users Class
     * Delete a single user.
     * **/
    deleteUser(){}
}

module.exports = Users;