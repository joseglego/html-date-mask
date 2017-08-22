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
    if (myDate) {
      date.innerHTML = fmt.formatDate(myDate, formatDate);
      time.innerHTML = fmt.formatDate(myDate, formatTime);
      $(input).text('');
      $(input).append(date, '<br/>', time);
    } else {
      $(input).html('Not VALID');
    }
  }

  $('.visual-datetime').datetimepicker({
    timepicker: true,
    format: format,
    onChangeDateTime: function (dp, $input) {
      setValue($input);
    } });
});
