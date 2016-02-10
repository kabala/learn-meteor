Template.contextExample.rendered = () => {
	console.log('Rendered context Example', this.data);
};

Template.contextExample.helpers({
	logContext () {
		console.log('Context Log Helper', this);
	},

	showNumber () {
		const session = Session.get('randomNumber');
		if(typeof session == 'number') {
			return Session.get('randomNumber');
		}else{
			return '--'
		}
	}
});

Template.contextExample.events({
	'click button': (e, t) => {
		Session.set('randomNumber', 1 + parseInt(Math.random(0, 99)*10));
	}
});