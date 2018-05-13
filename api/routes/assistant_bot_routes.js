'use strict';

module.exports = function(app) {

	var assistantBot = require('../controllers/assistant_bot');

	app.route('/message')
		.post(assistantBot.message);
};