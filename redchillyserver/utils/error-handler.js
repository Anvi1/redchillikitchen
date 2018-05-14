function hasError500(req, res) {
    res
        .status(500)
        .send({ error: 'Please retry after some time!' });
    return;
}

module.exports = {
    hasError500
}