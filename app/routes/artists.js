import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  return $.ajax({
    url: 'http://itp-api.herokuapp.com/api/artists',
  });
}
});
