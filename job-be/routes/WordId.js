module.exports = app => {
    var Work = require('../controller/Work');
    var router = require('express').Router();

    router.get('/', Work.findAllId);

    app.use("/workId", router);
}
