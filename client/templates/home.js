Template.home.created =  () => {
  console.log("Created the home template");
};

Template.home.rendered = () => {
  console.log('Rendered the home template');
};

Template.home.destroyed = () => {
  console.log('Destroyed the home template');
};

Template.home.helpers({

  exampleHelper () {
    return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>');
  },

  dataContextHelper () {
    return {
      someText: 'This text was set using a helper of the parent template.',
      someNested: {
        text: 'That comes from "someNested.text"'
      }
    };
  },

  postList () {
    return [
      {
        title: 'My Second Entry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet consequatur sit repellat qui cupiditate alias, ratione ipsam quis ex.',
        author: 'Fabian Vogelsteller',
        timeCreated: moment().substract(3, 'days').unix(),
      },
      {
        title: 'My First Entry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet consequatur sit repellat qui cupiditate alias, ratione ipsam quis ex.',
        author: 'Fabian Gallager',
        timeCreated: moment().substract(3, 'days').unix(),
      }
    ];
  }
});