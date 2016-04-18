
Template.hackerList.onCreated(function (){
	Meteor.subscribe('hackers');
});

Template.hackerList.helpers({
 	Hackers: function () {
		return Hackers.find();
	}
});