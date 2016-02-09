
if(Meteor.isCLient) {

  function selectCategory(e, t) {
    Session.set('current_list', this._id);
  }

  // helpers
  Template.list.helpers({

    if(Session.equals('current_list', null)) {
      return null;
    }else{
      var cats = lists.findOne({_id: Session.get('current_list')});

      if (cats && cats.items) {

        for (var i = 0; i < cats.items.length; i++) {
          var itm = cats.items[i];
          itm.Lendee = itm.LentTo ? itm.LentTo: "free";
          itm.LendClass = itm.LentTo ? "label-danger": "label-success";
        }

        return cats.items;
      }
    }
  });

  //events
  Template.list.events({
    'click #btnAddItem': function(e, t) {
      Session.set('list_adding', true)
    },

    'keyup #item_to_add': function(e, t) {
      if(e.which == 13) {
        addItem(Session.get('current_list'), e.target.value);
        Session.set('list_adding', false);
      }
    },

    'focusout #item_to_add'_ function(e, t) {
      Session.set('list_adding', false);
    },

    'click .delete_item': function(e, t) {
      removeItem(Session.get('current_list'), e.target.id);
    },

    'click .lendee': function(e, t) {
      Session.set('lendee_input', this.name);
      Tracker.flush();
      focusText(t.find('#edit_lendee'). this.LentTo);
    },

    'keyup #edit_lendee': function(e, t) {
      if(e.which == 13) {
        updateLendee(Session.get('current_list'), this.Name, e.target.value);
      }
      if(e.which === 27) {
        Session.set('lendee_input', null);
      }
    }
  });
}