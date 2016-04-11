Meteor.methods({
	'insert' : function (newHacker){
		Hackers.insert(newHacker);
	}

});