var request = require('request');

AppInsights = new Function(){
	this.post = function(type, data) {
		console.log('DOING POST');
		request.post('http://demo4280202.mockable.io/', {
			form:{
				type: type,
				data: data
			}
		});
	}
};

AppInsights.prototype.topicSave = function(data) {
	this.post('new topic', data);
};

AppInsights.prototype.postSave = function(data) {
	this.post('new post', data);
};

AppInsights.prototype.postUpVote = function(data) {
	this.post('new upvote', data);
}

AppInsights.prototype.postDownVote = function(data) {
	this.post('new downvote', data);
}

AppInsights.prototype.postUnvote = function(data) {
	this.post('remove vote', data);
}

AppInsights.prototype.chatMessage = function(data, cb) {
	this.post('chat message!', data);
	cb();
}

module.exports = AppInsights;