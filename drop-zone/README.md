DropZone combines a file-drop-zone with a hidden file input.

The user can either drop a file directly on the element or click it to show the browsers native file chooser.
When the user is hovering the component with a file, a `active` class will be added to the element which allways has the `drop-zone` class.
You can bind its file property to recieve a File object you can read via a FileReader or upload via a FormData object.

Usage:
```hbs
{{#drop-zone file=fileInput}}
  Click to choose a file or drop one here!
{{/drop-zone}}
```