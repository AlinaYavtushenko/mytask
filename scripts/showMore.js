const showMoreBtn = document.querySelectorAll('.show-more');

showMoreBtn.forEach(elem => elem.addEventListener("click", function(event){
  let descriptionItem = event.target.parentNode.querySelector('.description');
  event.target.parentNode.querySelector('.description').classList.toggle('fullText');

  if(descriptionItem.classList.contains('fullText')) {
    elem.innerHTML = 'Show Less'
  }
  else {
    elem.innerHTML = 'More..'
  }
}));
