// Code goes here
$(document).ready(function () {
  var format = 'd.m.Y H:m';
  var formatTime = 'H:m';
  var formatDate = 'd.m.Y';

  function setValue (value) {
    var fmt = new DateFormatter();
    var myDate = fmt.parseDate(value, format);
    var date = document.createElement('h3');
    var time = document.createElement('h4');
    $('#original').html(value);
    if (myDate) {
      date.innerHTML = fmt.formatDate(myDate, formatDate);
      time.innerHTML = fmt.formatDate(myDate, formatTime);
      $('#processing').text('');
      $('#processing').append(date, time);
    } else {
      $('#processing').html('Not VALID');
    }
  }

  $('#datetimepicker').datetimepicker({
    timepicker: true,
    format: format,
    onChangeDateTime: function (dp, $input) {
      setValue($input.val());
    } });

  $('#datetimepicker').on('keyup', function () {
    setValue(this.value);
  });
});
