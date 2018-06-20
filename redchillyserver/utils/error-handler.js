function hasError500(req, res) {
    res
        .status(500)
        .send({ error: 'Please retry after some time!' });
    return;
}

function message(res, message, shouldShow) {
    res
        .status(400)
        .send({ error: message, shouldShow: shouldShow })
}

module.exports = {
    hasError500,
    message
}