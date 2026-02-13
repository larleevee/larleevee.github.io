const menuClose = document.getElementById('menuClose');
const menuWindow = document.getElementById('menuWindow');
menuClose.addEventListener('click', () => {
  menuWindow.style.display = 'none';
});

const menuTitlebar = document.getElementById('menuTitlebar');
let isDragging = false, offsetX = 0, offsetY = 0;
menuTitlebar.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - menuWindow.offsetLeft;
  offsetY = e.clientY - menuWindow.offsetTop;
  document.body.style.userSelect = 'none';
});
document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    menuWindow.style.left = (e.clientX - offsetX) + 'px';
    menuWindow.style.top = (e.clientY - offsetY) + 'px';
  }
});
document.addEventListener('mouseup', function() {
  isDragging = false;
  document.body.style.userSelect = '';
});
