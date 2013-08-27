Ember Tooltip is a very simple block component that makes everything inside a trigger for a Twitter Bootstrap Tooltip.

The content of the tooltip is provided as the 'title' attribute, following the Twitter Bootstrap Tooltip API.
Also, you can set the direction of the popover via the 'direction' attribute which will default to "top"

Usage:
```hbs
{{#ember-tooltip title="Tooltip Content"}}
  This triggers the tooltip on hover/focus
{{/ember-tooltip}}
```