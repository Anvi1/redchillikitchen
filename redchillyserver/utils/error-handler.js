function hasError500(req, res) {
    res
        .status(500)
        .send({ error: 'Please retry after some time!' });
    return;
}

function message(res, message) {
    res
        .status(400)
        .send({ error: message })
}

module.exports = {
    hasError500,
    message
}