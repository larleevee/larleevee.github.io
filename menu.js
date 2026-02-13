function makeDraggable(windowEl, titlebarEl) {
  let isDragging = false, offsetX = 0, offsetY = 0;
  titlebarEl.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;
    document.body.style.userSelect = 'none';
  });
  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      windowEl.style.left = (e.clientX - offsetX) + 'px';
      windowEl.style.top = (e.clientY - offsetY) + 'px';
      windowEl.style.right = 'auto';
      windowEl.style.bottom = 'auto';
    }
  });
  document.addEventListener('mouseup', function() {
    isDragging = false;
    document.body.style.userSelect = '';
  });
}

const menuClose = document.getElementById('menuClose');
const menuWindow = document.getElementById('menuWindow');
const menuTitlebar = document.getElementById('menuTitlebar');
if (menuWindow && menuTitlebar && menuClose) {
  makeDraggable(menuWindow, menuTitlebar);
  menuClose.addEventListener('click', () => {
    menuWindow.style.display = 'none';
  });
}

const bobGif = document.querySelector('img[src="assets/buttons/bob.gif"]');
const videoMenu = document.getElementById('videoMenu');
const videoMenuClose = document.getElementById('videoMenuClose');
const videoMenuTitlebar = document.getElementById('videoMenuTitlebar');
const announcementVideo = document.getElementById('announcementVideo');

if (videoMenu && videoMenuTitlebar && videoMenuClose) {
  makeDraggable(videoMenu, videoMenuTitlebar);
  videoMenuClose.addEventListener('click', () => {
    videoMenu.style.display = 'none';
    if (announcementVideo) {
      announcementVideo.pause();
    }
  });
  if (bobGif) {
    bobGif.addEventListener('click', () => {
      videoMenu.style.display = '';
      if (announcementVideo) {
        announcementVideo.currentTime = 0;
        announcementVideo.play();
      }
    });
  }
}
