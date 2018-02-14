const apiVersioning = "/6ix/v1";

// Response Handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Error Handling
let sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).send(response);
};

module.exports = {
    apiVersioning,
    response,
    sendError
};
