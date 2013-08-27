/**
 * Ember Tooltip is a very simple block component that makes everything
 * inside a trigger for a Twitter Bootstrap Tooltip.
 *
 * The content of the tooltip is provided as the "title" attribute,
 * following the Twitter Bootstrap Tooltip API.
 *
 * Usage:
 * {{#ember-tooltip title="tooltip content"}}
 *   This triggers the tooltip on hover/focus
 * {{/ember-tooltip}}
 */
var EmberTooltipComponent = Ember.Component.extend({
  didInsertElement: function() {
    this.$().tooltip({
      title: this.get('title'),
      placement: this.get('placement') || 'top',
      container: 'body'
    });
  },

  willDestroyElement: function() {
    this.$().tooltip('destroy');
  }
});

export default EmberTooltipComponent;