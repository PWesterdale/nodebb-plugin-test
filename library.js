var appInsights = require('applicationinsights'),
	config = require.main.require('./config.json'),
	category = module.parent.require('./categories'),
	topic = module.parent.require('./topics'),
	post = module.parent.require('./posts'),
	messaging = module.parent.require('./messaging')
	async = require('async');

appInsights.setup(config.applicationInsights.instrumentationKey)
	.setAutoCollectRequests(false)
	.start();

AppInsights = {};

AppInsights.post = function(type, data) {
	appInsights.client.trackEvent(type, data);
};

AppInsights.pageView = function(data) {
	instance.post('PageView', {
		'PageViewUrl' : data.req.url
	});
};

AppInsights.topicSave = function(data) {
	instance.post('PostPublished', {
		'PostURL' : config.url + '/topic/' + slug,
		'ActionType' : 'create',
		'Category' : data.cid,
		'xuid' : data.uid,
		'ContentPosted' : data.title
	});
};

AppInsights.postSave = function(data) {
	instance.post('PostPublished', {
		'PostURL' : config.url + '/topic/' + data.tid,
		'ActionType' : 'reply',
		'Category' : data.cid,
		'xuid' : data.uid,
		'ContentPosted' : data.content
	});
};

AppInsights.postVote = function(data, type) {
	topic.getTopicDataByPid(data.pid, (err, topic) => {
		instance.post('PostActioned', {
			'PostURL' : config.url + '/topic/' + topic.slug + '/' + data.pid,
			'ActionType' : type,
			'Category' : topic.cid,
			'xuid' : data.uid
		})
	});
};

AppInsights.postUpVote = function(data) {
	instance.postVote(data, 'upvote');
};

AppInsights.postDownVote = function(data) {
	instance.postVote(data, 'downvote');
};

AppInsights.postUnvote = function(data) {
	instance.postVote(data, 'unvote');
};

AppInsights.chatMessage = function(data, cb) {
	messaging.getUidsInRoom(data.roomId, 0, 100, (err, users) => {
		users = users.filter((uId) => {
			return uId != data.fromuid;
		});
		instance.post('ChatAction', {
			'PrimaryXuid' : data.fromuid,
			'SecondaryXuid' : users.length > 1 ? users : parseInt(users[0]),
			'ActionType' : 'Chat'
		});
		cb(null, data);
	});
};

var instance = AppInsights;

module.exports = instance;