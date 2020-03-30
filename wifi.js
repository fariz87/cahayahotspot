var $wifi = $('.wifi');

$('#states  button').click(function () {
  var wifiClass = $(this).attr('data-class');
  if (wifiClass.length === 0) {
    $wifi.removeClass().addClass('wifi');
  } else {
    $wifi.removeClass().addClass('wifi ' + wifiClass);
  }
});