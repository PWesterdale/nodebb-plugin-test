var request = require('request');

AppInsights = {};

AppInsights.post = function(type, data) {
	request({
    	url: 'http://demo4280202.mockable.io/test',
    	method: "POST",
    	json: {type : type, data: data}
	}, function(err, res, body){
		console.log(body);
	});
};

AppInsights.topicSave = function(data) {
	instance.post('new topic', data);
};

AppInsights.postSave = function(data) {
	instance.post('new post', data);
};

AppInsights.postUpVote = function(data) {
	instance.post('new upvote', data);
};

AppInsights.postDownVote = function(data) {
	instance.post('new downvote', data);
};

AppInsights.postUnvote = function(data) {
	instance.post('remove vote', data);
};

AppInsights.chatMessage = function(data, cb) {
	instance.post('chat message!', data);
	cb();
};

var instance = AppInsights;

module.exports = instance;