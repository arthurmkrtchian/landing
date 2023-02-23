window.onload = function() {
    var header = document.getElementById('header')
    var number = parseInt(window.getComputedStyle(header).height)
    document.getElementById('header').style.marginBottom = number + 'px';
  }