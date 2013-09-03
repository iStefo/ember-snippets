/**
 * This Component combines a file-drop-zone with a hidden file input.
 *
 * The user can either drop a file directly on the element or click it to show
 * the browsers native file chooser.
 *
 * When the user is hovering the component with a file, a `active` class will be
 * added to the element which allways has the `drop-zone` class.
 *
 * You can bind its file property to recieve a File object you can read via
 * a FileReader or upload via a FormData object.
 */
var DropZone = Ember.Component.extend({
  classNames: ['drop-zone'],
  classNameBindings: ['isDropTarget:active'],
  isDropTarget: false,

  actions: {
    /**
      Handles a change on the file input
     */
    fileInputChanged: function() {
      this.set('file', this.$('input[type=file]').get(0).files[0]);
    }
  },

  /**
    Set isDropTarget and cancel events on dragOver to signalize browser that we
    handle the drop, too
   */
  dragOver: function(e) {
    this.set('isDropTarget', true);
    e.preventDefault();
    return false;
  },

  /**
    Unset isDropTarget to remove visual indication
   */
  dragLeave: function() {
    this.set('isDropTarget', false);
  },

  /**
    Handle drop, set first dropped file to the components file property
   */
  drop: function(e) {
    e.preventDefault();
    var files = e.target.files || e.dataTransfer.files;
    Ember.assert('Dropped files are empty', files.length);
    this.set('file', files[0]);
    this.set('isDropTarget', false);
    return false;
  },

  /**
    "Forward" click to file input to open file choser if the event does not
    originate from the input element itself
   */
  click: function(e) {
    if (e.target.tagName !== 'INPUT') {
      this.$('input[type=file]').click();
    }
  }

});

export default DropZone;