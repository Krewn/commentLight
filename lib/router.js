Router.configure({layoutTemplate: 'layout'});

Router.route('/');
Router.route('/new-hacker', {name: 'newHackerForm'});
Router.route('/list-hackers', {name: 'hackerList'});
