new WOW().init();


var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: -10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  gragCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.menu-list-container').on('click', '.menu-list', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

const categori = document.getElementsByClassName("swiper-slide"),
  menuListesobject = document.getElementsByClassName("menu-list"),
  menuListes = Object.keys(menuListesobject).map(function (key) {
    return menuListesobject[key]
  }),
  menuListesContainer = document.getElementById("listContainer"),
  categoriCard = document.getElementsByClassName("categori-card"),
  menuItems = document.getElementsByClassName("menu-item")

window.addEventListener('load', function () {
  for (let x = 0; x < categori.length; x++) {
    categori[x].setAttribute('onclick', 'categoriEvvents(event)')
  }
  menuListesContainer["children"][0].style.display = 'flex'

  for (let y = 1; y < menuListesContainer['children'].length; y++) {
    menuListesContainer["children"][y].style.display = 'none';
  }
  categoriCard[0].classList.add("active");
  // fisrtEnterAnime();
  giveAnime();
})

function categoriEvvents(event){
  showMenu(event);
}

function giveAnime(){
  console.log("vared tabe shod")
  anime({
    target : '.item-menu',
    translateX : 150,
    direction: 'reverse'
  })
}

function fisrtEnterAnime(){ 
  anime({
    target : ' .burger .menu-item',
    translateX : 150,
    direction: 'reverse'
  })

}
// function enterBurger() {
//   console.log("hi")
//   anime({
//     targets: '.menu-item',
//     // translateX: 0,
//     // opacity: 1,
//     // rotate: '1turn',
//     translateX : 250,
//     direction: 'reverse',
//     // duration: 1000,
//     // loop: true
//   });
// }

function showMenu(event) {
  let timesClick = localStorage.getItem('clicked');
  let isClick;

  if (timesClick == null) {
    localStorage.setItem('clicked', 'yes');
    isClick = false
  }
  else if (timesClick == 'yes') {
    isClick = true
  }

  let selected = event.target;
  let selectedClassP = event.target.parentNode.classList[0]
  let target;
  let activeTarget;

  switch (selectedClassP) {
    case 'categori-name':
      target = selected.parentNode.parentNode.parentNode;
      activeTarget = selected.parentNode.parentNode;
      break;
    case 'categori-icon':
      target = selected.parentNode.parentNode.parentNode;
      activeTarget = selected.parentNode.parentNode;
      break
    case 'categori-card':
      target = selected.parentNode.parentNode;
      activeTarget = selected.parentNode;
      break;
    case 'swiper-slide':
      target = selected.parentNode;
      activeTarget = selected.classList;
      break;
    case 'swiper-wrapper':
      target = selected;
      activeTarget = selected.children;
    default:
      console.log("are you sure you click som where or i am drunk?!");
      target = null
      break;
  }

  //targert - > element.swiper-slide
  let targetValue = target.getAttribute('target-menu');
  let targetMenu = document.getElementById(targetValue);

  for (let z = 0; z < menuListesContainer["children"].length; z++) {
    menuListesContainer["children"][z].style.display = 'none'
  }

  targetMenu.style.display = 'flex'
  console.log(targetMenu.children[0])

  for (let q = 0; q < categoriCard.length; q++) {
    categoriCard[q].classList.remove("active");
  }
}