console.log('js')


var countdownElement = document.getElementById('countdown');

var initialcountdown = countdownElement.innerHTML;

setInterval(function () {

  initialcountdown = initialcountdown > 0 ? initialcountdown - 1 : 0;

  countdownElement.innerHTML = initialcountdown;

}, 1000);
