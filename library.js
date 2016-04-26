var request = require('request');

AppInsights = {};

AppInsights.post = function(type, data) {
	request.post('http://demo4280202.mockable.io/', {
		form:{
			type: type,
			data: data
		}
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