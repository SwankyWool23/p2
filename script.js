document.getElementById('yes-btn').addEventListener('click', function() {
  alert('¡Jeje, lo sabía! TKM MUCHOO 😊');
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
  const btn = document.getElementById('no-btn');
  btn.style.position = 'absolute';
  const randomX = Math.floor(Math.random() * 90) + 5;
  const randomY = Math.floor(Math.random() * 90) + 5;
  btn.style.left = randomX + '%';
  btn.style.top = randomY + '%';
});