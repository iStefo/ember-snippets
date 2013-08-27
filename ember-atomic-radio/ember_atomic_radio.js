/**
 * This is a Radio Button that behaves like a radio button should within its name which can be specified by
 * {{ember-atomic-radio name="my-group"}}
 *
 * What makes it atomic is, that you don't have to bind the 'value' property of the radio button group
 * but you can bind the 'selected' property to your model
 * {{ember-atomic-radio name="my-group" selected=wizzard.isChosenOne}}
 * when used e.g. inside an #each loop
 */
var EmberAtomicRadio = Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['type', 'name', 'value'],
  type: 'radio',
  // name and value should be set via templates

  didInsertElement: function() {
    // watch on body and filter for input with own name so we get notified
    // for elements that are rendered after this method is executed
    $('body').on('change', 'input[type=radio][name=' + this.get('name') + ']', this.changeListener = $.proxy(this.changed, this));
  },

  willDestroyElement: function() {
    // don't forget to clean up
    $('body').off('change', this.changeListener);
  },

  changed: function() {
    // any of the radio inputs for this group changed.
    // test own element and save its state
    this.set('selected', this.$().is(':checked'));
  }
});

export default EmberAtomicRadio;