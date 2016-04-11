Hackers = new Mongo.Collection('hackers');

if(Meteor.isServer) {
	Meteor.publish('hackers', function () {
		return Hackers.find({'allegiance': "Black Hat"});
	});
}

