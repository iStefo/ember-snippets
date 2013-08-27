This is a Radio Button that behaves like a radio button should within its name which can be specified by
```hbs
{{ember-atomic-radio name="my-group"}}
```

What makes it atomic is, that you don't have to bind the 'value' property of the radio button group, but you can bind the 'checked' property to your model:
```hbs
{{ember-atomic-radio name="my-group" checked=wizzard.isChosenOne}}
```
when used e.g. inside an #each loop.

**Note**: This component does not maintain the radio group invariant if you set the 'checked' property manually (so you can end up with more then one object "checked" if you don't do it by clicking)