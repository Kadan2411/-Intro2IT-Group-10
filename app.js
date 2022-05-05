var welcomeBtn = document.querySelector('button')
var welcomeModal = document.querySelector('.welcome-panel')
var welcomeBox = document.querySelector('.welcome-panel-inner')

welcomeBtn.addEventListener('click', function() {
  welcomeModal.classList.toggle('hide')
})
welcomeModal.addEventListener('click', function(e) {
  console.log('e.target', e.target);
  console.log('e.currentTarget', e.currentTarget);
  if (e.target === e.currentTarget) {
    welcomeModal.classList.toggle('hide')
  }
})
