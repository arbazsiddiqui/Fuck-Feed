a = document.querySelectorAll('div._1dwg');

for (var i = 0; i < a.length; i++) {
  if (a[i].innerHTML.indexOf("Donald Trump") >= 0) {
    a[i].parentElement.parentElement.style.visibility = 'hidden';
  }
}