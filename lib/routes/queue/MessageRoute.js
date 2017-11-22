'use strict';

const env = require('./../../core/env'),
    QueueMessageTextXmlModel = require('./../../xml/queue/QueueMessageText'),
    AzuriteQueueRequest = require('../../model/queue/AzuriteQueueRequest'),
    Operations = require('./../../core/Constants').Operations;

/*
 * Route definitions for all operation on the 'message' resource type.
 * See https://docs.microsoft.com/rest/api/storageservices/operations-on-messages
 * for details on specification.
 */
module.exports = (app) => {
    app.route(`/${env.emulatedStorageAccountName}/:queue/messages/?*`)
        .get((req, res, next) => {
            next();
        })
        .head((req, res, next) => {
            next();
        })
        .put((req, res, next) => {
            next();
        })
        .post((req, res, next) => {
            req.azuriteOperation = Operations.Queue.PUT_MESSAGE;
            QueueMessageTextXmlModel.toJs(req.body)
                .then((payload) => {
                    req.azuriteRequest = new AzuriteQueueRequest({ req: req, payload: payload });
                    next();
                });
        })
        .delete((req, res, next) => {
            next();
        });
}