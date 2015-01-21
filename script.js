addEventListener('load', function(){
  var target = document.getElementsByClassName('user-name')[0];
  var userName = target.textContent;
  target.innerHTML = '<a href="https://twitter.com/' + userName + '" target="_blank">' + userName + '</a>';
});

