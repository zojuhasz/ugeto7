(function ($) {
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = $(node).data('autocompleteValue');
  if(jQuery(this.input).hasClass('auto_submit')){
    this.input.form.submit();
  }};
})(jQuery);