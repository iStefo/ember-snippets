This is a Radio Button that behaves like a radio button should within its name which can be specified by
```hbs
{{ember-atomic-radio name="my-group"}}
```

What makes it atomic is, that you don't have to bind the 'value' property of the radio button group, but you can bind the 'selected' property to your model:
```hbs
{{ember-atomic-radio name="my-group" selected=wizzard.isChosenOne}}
```
when used e.g. inside an #each loop.