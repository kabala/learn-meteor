// helper functions
function focusText(i) {
  i.focus();
  i.select();
}

if(Meteor.isClient) {

  // Categories template
  // helpers
  Session.set('adding_category', false);

  Template.categories.helpers({
    lists: function () {
      return lists.find({}, { sort: { Category : 1 }});
    },

    new_cat: function () {
      return Session.equals('adding_category', true);
    },

    list_status: function() {
      if (Session.equals('current_list', this._id)) {
        return " btn-info";
      }else{
        return " btn-primary";
      }
    },

    list_selected: function() {
      return (Session.get('current_list' != null) && (!Session.equals('current_list', null)));
    },

    list_adding: function() {
      return (Session.equals('list_adding', true));
    },

    lendee_editing: function() {
      return (Session.equals('lendee_input', this.Name));
    }

  });

  // events
  Template.categories.events({
    'click #btnNewCat': function(e, t) {
      Session.set('adding_category', true);
      Tracker.flush();
      focusText(t.find('#add_category'));
    },

    'keyup #add-category': function(e, t) {
      if(e.which == 13) {
        var catVal = String(e.target.value || "");
        if (catVal) {
          lists.insert({Category: catVal});
          Session.set('adding_category', false);
        }
      }
    },

    'focusout #add-category': function(e, t) {
      Session.set('adding_category', false);
    }
  });
}