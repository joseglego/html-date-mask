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
    const suffixNameLength = 16;
    const hiddenInputId = $(input).attr('id').substring(suffixNameLength);

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
    $(parent).append(`<div id="visual-datetime-${id}" class="visual-datetime-view"></div>`);
  });

  $('.visual-datetime-view').datetimepicker({
    timepicker: true,
    format: format,
    onChangeDateTime: function (dp, $input) {
      setValue($input);
    } });
});
