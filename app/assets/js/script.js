// Code goes here
$(document).ready(function () {
  var format = 'd.m.Y H:m';
  var formatTime = 'H:m';
  var formatDate = 'd.m.Y';

  $('#datetimepicker').datetimepicker({
    timepicker: true,
    format: format,
    onChangeDateTime: function(dp,$input){
      setValue($input.val());
    }
  });

  $('#datetimepicker').on('keyup', function () {
    setValue(this.value);
  });

  function setValue(value) {
    $('#original').html(value);
    var fmt = new DateFormatter();
    var myDate = fmt.parseDate(value, format);
    if (myDate) {
      var date = document.createElement('h3');
      date.innerHTML = fmt.formatDate(myDate, formatDate);
      var time = document.createElement('h4');
      time.innerHTML = fmt.formatDate(myDate, formatTime);
      $('#processing').text('');
      $('#processing').append(date, time);
    } else {
      $('#processing').html('Not VALID');
    }
  }
});
