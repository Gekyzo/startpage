function search() {
  var input = $('#input');
  var q = 'https://www.google.es/search?q=';
  
  $(input).keypress(function(e) {
    if(e.which == 13) {
      q += input.val();
      window.location.href = q;
    }
  })
}

function displayTime() {
  var timer = $('#time');
  var d = new Date();
  timer.text(d.getHours() + ':' + d.getMinutes());
}


$(function() {
  search();
  displayTime();
});