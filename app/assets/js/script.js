// Code goes here
$(document).ready(function () {
  const format = 'd.m.Y H:i';
  const formatTime = 'H:i A';
  const formatDate = 'd F, Y';

  function setValue(input) {
    const value = input.val();
    const fmt = new DateFormatter();
    const myDate = fmt.parseDate(value, format);
    const date = document.createElement('b');
    const time = document.createElement('span');
    const hiddenInputId = $(input).attr('data-target');

    if (myDate) {
      date.innerHTML = fmt.formatDate(myDate, formatDate);
      time.innerHTML = fmt.formatDate(myDate, formatTime);
      $(input).text('');
      $(input).append(date, '<br/>', time);
      $(`#${hiddenInputId}`).val(myDate);
    } else {
      $(input).html('Not VALID');
    }
  }

  $('.visual-datetime').each(function () {
    const parent = $(this).parent();
    const id = $(this).attr('id');
    $(this).css('display', 'none');
    $(parent).append(`<div class="visual-datetime-view" data-vdt-target="${id}"></div>`);
    $(parent).append(`<a href="#" class="visual-datetime-clear" data-vdt-target="${id}">Clear</a>`);
  });

  $('.visual-datetime-view').datetimepicker({
    timepicker: true,
    format: format,
    onChangeDateTime: function (dp, $input) {
      setValue($input);
    } });

  $('.visual-datetime-clear').on('click', function (event) {
    event.preventDefault();
    const inputId = $(this).attr('data-vdt-target');
    $(`#${inputId}`).val('');
    $(`.visual-datetime-view[data-vdt-target=${inputId}]`).html('');
  });
});
