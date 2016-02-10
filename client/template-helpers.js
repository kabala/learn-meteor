Template.registerHelper('formatTime', (time, type) => {
	switch(type) {
		case 'fromNow':
			return moment.unix(time).fromNow();
		case 'iso':
			return moment.unix(time).toISOString();
    case 'hola':
      return 'hola';
		default:
			return moment.unix(time).format('LLLL');
	}
});