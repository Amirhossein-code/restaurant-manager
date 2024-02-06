// wow library init
new WOW().init();

//
// import 'animate.css';

//swiper library init
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

var swiper = new Swiper(".tab-mode .swiper", {
  slidesPerView: 8,
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

//valriables we use in show menu part
const categori = document.getElementsByClassName("swiper-slide"),
  menuListesobject = document.getElementsByClassName("menu-list"),
  menuListes = Object.keys(menuListesobject).map(function (key) {
    return menuListesobject[key]
  }),
  menuListesContainer = document.getElementsByClassName("menu-list-container"),
  categoriCard = document.getElementsByClassName("categori-card"),
  menuItems = document.getElementsByClassName("menu-item");

//variables we use in getting info from backend and creat categoris and menus


//  first enter things need to do -
// every time site reaload or loaded this thing need to happend
window.addEventListener('load', function () {
  //set onclick event to all categoris
  for (let x = 0; x < categori.length; x++) {
    categori[x].setAttribute('onclick', 'categoriEvvents(event)')
  }
  //show first catgories menu items in the first view and enter of the page
  for (let t = 0; t < menuListesContainer.length; t++) {
    menuListesContainer[t]["children"][0].style.display = 'flex'
  }
  categoriCard[0].classList.add("active");
  // none the displaye of the other menus
  for (let w = 0; w < menuListesContainer.length; w++) {
    for (let y = 1; y < menuListesContainer[w]['children'].length; y++) {
      menuListesContainer[w]["children"][y].style.display = 'none';
    }
  }
  fisrtEnterAnime();
})

function categoriEvvents(event) {
  showMenu(event);
}

function fisrtEnterAnime() {
   for (let a = 0; a < menuListesContainer.length; a++) {
     menuListesContainer[a]["children"][0].classList.remove("animated");
     menuListesContainer[a]["children"][0].classList.add("animated");
   }

}

// show categoris exact menu by clicking on
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
      activeTarget = selected;
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
  let targetMenu = document.getElementsByClassName(targetValue); // select menu list with especific id wich we need it and customer clicked on that menu
  for (let t = 0; t < menuListesContainer.length; t++) {
    for (let z = 0; z < menuListesContainer[t]["children"].length; z++) {
      menuListesContainer[t]["children"][z].style.display = 'none'

    }
  }
  for (let w = 0; w < targetMenu.length; w++) {
    targetMenu[w].style.display = 'flex'
    targetMenu[w].classList.remove("animated");
    targetMenu[w].classList.add("animated");

  }

  for (let q = 0; q < categoriCard.length; q++) {
    categoriCard[q].classList.remove("active");
  }
  activeTarget.classList.add("active");
  let animetarget = "#" + targetValue + " " + ".menu-item"
}