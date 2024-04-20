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