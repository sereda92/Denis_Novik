
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
   anchor.addEventListener("click", function(event){
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}

const header = document.querySelector('.header');
const first = document.querySelector('.page_title');
const burger = document.querySelector('.burger-menu');
const colorLink = document.querySelectorAll('.item_link');

const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= firstHeight + headerHeight) {
		header.classList.add('header--fixed');
      burger.classList.add('burger--fixed');
      colorLink.forEach(link => link.classList.add('item_link-fixed'));
	} else {
		header.classList.remove('header--fixed');
		burger.classList.remove('burger--fixed');
      colorLink.forEach(link => link.classList.remove('item_link-fixed'));
		first.style.marginTop = null;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
      burger.classList.remove('burger--fixed');
      colorLink.forEach(link => link.classList.remove('item_link-fixed'));
		first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});


const openPopUp = document.getElementById('open_pop_up');
const popUpClose = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function(e){
   e.preventDefault();
   popUp.classList.add('active');
   header.classList.remove('header--fixed');
})

popUpClose.addEventListener('click', () => {
   popUp.classList.remove('active');
   header.classList.add('header--fixed');
})