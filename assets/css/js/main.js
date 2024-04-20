//BASEOF

let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

 
 
 
 //HEADER
 
  const contactPopup = document.getElementById('popup-container');
  const imprintPopup = document.getElementById('imprint-popup');
  const content = document.getElementById('content');

  function openContactPopup() {contactPopup.style.display = 'flex';
                               content.style.display = 'none';}

  function closeContactPopup() {contactPopup.style.display = 'none';}

  function openImprintPopup() {imprintPopup.style.display = 'flex';}
  function closeImprintPopup() {imprintPopup.style.display = 'none';}

  document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
      closeContactPopup(event);
      closeImprintPopup(event);
  }
  });




//SIDEBAR

const resizableNav = document.getElementById('resizable-nav');
const handle = document.getElementById('scale-handle');

let startX;
let startWidth;
let startScrollLeft;
let startScrollTop;

document.addEventListener('DOMContentLoaded', function() {
    const storedWidth = JSON.parse(localStorage.getItem('resizableNavWidth'));
    if (storedWidth) {
        resizableNav.style.width = storedWidth + 'px';
        const leftDistance = resizableNav.getBoundingClientRect().right;
        handle.style.left = leftDistance - 152 + 'px';
    }

    const storedScrollTop = JSON.parse(localStorage.getItem('resizableNavScrollTop'));
    if (storedScrollTop) {
        resizableNav.scrollTop = storedScrollTop;
    }
});

handle.addEventListener('mousedown', function(event) {
    startX = event.clientX;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizableNav).width, 10);
    startScrollLeft = resizableNav.scrollLeft;
    startScrollTop = resizableNav.scrollTop;
    document.addEventListener('mousemove', resizeNav);
    document.addEventListener('mouseup', stopResize);
});

resizableNav.addEventListener('scroll', function() {
    const scrollLeft = resizableNav.scrollLeft;
    const scrollTop = resizableNav.scrollTop;
    localStorage.setItem('resizableNavScrollTop', JSON.stringify(scrollTop));
});

function resizeNav(event) {
    const width = startWidth + event.clientX - startX;
    const leftDistance = resizableNav.getBoundingClientRect().right;
    resizableNav.style.width = width + 'px';
    handle.style.left = leftDistance - 152 + 'px';
    document.body.style.userSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.webkitUserSelect = 'none';


    localStorage.setItem('resizableNavWidth', JSON.stringify(width));
}

function stopResize() {
    document.removeEventListener('mousemove', resizeNav);
    document.body.style.userSelect = 'auto';
    document.body.style.mozUserSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
}