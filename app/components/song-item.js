import Ember from 'ember';

export default Ember.Component.extend({
  isPopular: Ember.computed('song.playCount', function(){
		if (this.get('song.playCount') > 20){
      return true
    } else {
      return false
    };
	}),

	checkPrice: Ember.computed('song.price', function(){
		if (this.get('song.price') > 1) {
      return true
    } else {
      return false
    };
  }),

  actions: {
    like: function(e) {
      e.preventDefault();
      this.set('liked', true);
    },
    unlike: function(e) {
      e.preventDefault();
      this.set('liked', false);
    }
    }

});
