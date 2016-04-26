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
}

AppInsights.topicSave = function(data) {
	this.post('new topic', data);
};

AppInsights.postSave = function(data) {
	this.post('new post', data);
};

AppInsights.postUpVote = function(data) {
	this.post('new upvote', data);
}

AppInsights.postDownVote = function(data) {
	this.post('new downvote', data);
}

AppInsights.postUnvote = function(data) {
	this.post('remove vote', data);
}

AppInsights.chatMessage = function(data, cb) {
	this.post('chat message!', data);
	cb();
}

module.exports = AppInsights;