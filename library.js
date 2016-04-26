AppInsights = {};

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

AppInsights.chatMessage = function(data) {
	this.post('chat message!', data);
}

AppInsights.post = function(type, data) {
	console.log('RARE-DEV ' + type);
}

module.exports = AppInsights;