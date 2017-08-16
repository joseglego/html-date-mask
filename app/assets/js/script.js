// Code goes here
$(document).ready(function () {
  var format = 'd.m.Y H:i';
  var formatTime = 'H:i A';
  var formatDate = 'd F, Y';

  function setValue (value) {
    var fmt = new DateFormatter();
    var myDate = fmt.parseDate(value, format);
    var date = document.createElement('b');
    var time = document.createElement('span');
    $('#original').html(value);
    if (myDate) {
      date.innerHTML = fmt.formatDate(myDate, formatDate);
      time.innerHTML = fmt.formatDate(myDate, formatTime);
      $('#processing').text('');
      $('#processing').append(date, '<br/>' ,time);
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
