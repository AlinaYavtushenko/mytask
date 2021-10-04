const mobileMenuBtn = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.navigation');
mobileMenuBtn.addEventListener("click", function(event){
  if(navigation.classList.contains('opened')) {
    navigation.classList.remove('opened');
    navigation.classList.add('closed');
    document.body.classList.remove('scrollDisabled')
  }
  else {
    navigation.classList.remove('closed');
    navigation.classList.add('opened');
    document.body.classList.add('scrollDisabled')
  }
});


const container = document.querySelector('.container')
const onScroll = () => {
const scroll = document.documentElement.scrollTop
  if (scroll > 250) {
    container.classList.add("mobileFixed");
  } else {
    container.classList.remove("mobileFixed")
  }
}

window.addEventListener('scroll', onScroll)