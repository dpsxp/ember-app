import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return $.getJSON("http://localhost:8080/products")
  }
});
