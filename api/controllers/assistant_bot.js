'use strict';

var watsonService = require('../helpers/watson_service');

exports.message = function(req,res) {

    watsonService.getResponse(req.body["text"], function(response) {
        res.json(response);
    });
};