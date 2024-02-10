const baseUrl = 'http://127.0.0.1:8000'

// wow library init
new WOW().init();

//
// import 'animate.css';

//swiper library init
var swiper = new Swiper(".swiper", {
  slidesPerView: 4.5,
  spaceBetween: 10,
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

//valriables we use i
const categori = document.getElementsByClassName("swiper-slide"),
  menuListesobject = document.getElementsByClassName("menu-list"),
  menuListes = Object.keys(menuListesobject).map(function (key) {
    return menuListesobject[key]
  }),
  menuListesContainer = document.getElementById("menu-list-container"),
  categoriCard = document.getElementsByClassName("categori-card"),
  menuItems = document.getElementsByClassName("menu-item"),
  themecontainer = document.getElementById("themeContainer"),
  light_lamp = document.getElementById("light-lamp"),
  dark_lamp = document.getElementById("dark-lamp"),
  // menuIcon = document.getElementById("menu-icon"),
  // menuclose = document.getElementById("close-menu"),
  nav = document.getElementById("mobile-nav"),
  menu = document.getElementById("mobile-menu")

//navbar 
// menuIcon.addEventListener("click", () => {
//   nav.style.display = "flex"
// })
// menuclose.addEventListener("click" , ()=>{
//   nav.style.display="none"
// })


//  first enter things need to do -
// every time site reaload or loaded this thing need to happend
window.addEventListener('load', function () {
  themecontainer.addEventListener("click", () => {
    themecontainer.classList.toggle("dark")
    let bodyTheme = this.document.body.getAttribute("theme")
    if (themecontainer.classList.contains("dark")) {
      this.document.body.setAttribute("theme", "dark")
    }
    else {
      this.document.body.setAttribute("theme", "light")

    }
  })
  //set onclick event to all categoris
  for (let x = 0; x < categori.length; x++) {
    categori[x].setAttribute('onclick', 'showMenu(event)')
  }
  //show first catgories menu items in the first view and enter of the page

  menuListesContainer["children"][0].style.display = 'flex'

  categoriCard[0].classList.add("active");
  // none the displaye of the other menus
  for (let y = 1; y < menuListesContainer['children'].length; y++) {
    menuListesContainer["children"][y].style.display = 'none';
  }
  menuListesContainer["children"][0].classList.remove("animated");
  menuListesContainer["children"][0].classList.add("animated");
})


// show categoris exact menu by clicking on
function showMenu(event) {
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
  let targetMenu = document.getElementById(targetValue); // select menu list with especific id wich we need it and customer clicked on that menu
  for (let z = 0; z < menuListesContainer["children"].length; z++) {
    menuListesContainer["children"][z].style.display = 'none'

  }

  targetMenu.style.display = 'flex'
  targetMenu.classList.remove("animated");
  targetMenu.classList.add("animated");



  for (let q = 0; q < categoriCard.length; q++) {
    categoriCard[q].classList.remove("active");
  }
  activeTarget.classList.add("active");
  let animetarget = "#" + targetValue + " " + ".menu-item"
}



//======= get data from db and set it to the page


// url
const itemApi = `${baseUrl}/app/items/`,
  categoriApi = `${baseUrl}/app/categories/`;

const swiperWrapper = document.getElementById("swiper-wrapper"),
  menuListContainer = document.getElementById("menu-list-container")

fetch(categoriApi).then((res) => {
  var categoriData = res.json();
  categoriData.then(result => {
    createCategori(result.results);
  })
});

function createCategori(data) {
  data.forEach(categoriElement => {
    var categoriId = categoriElement.id
    var categorititle = categoriElement.title;
    var categoriSlug = categoriElement.slug;
    var categoriImg = categoriElement.image;
    var swiperTarget = categoriSlug;
    //create div.swiper-silde and appenchild it to div.swiper-wrapper
    const swiper_slide = document.createElement("div");
    swiper_slide.classList.add("swiper-slide");
    swiper_slide.setAttribute("target-menu", categoriSlug);
    swiperWrapper.appendChild(swiper_slide);
    swiper_slide.innerHTML = `
        <div class="categori-card">
             <div class="categori-icon">
                <img src= ${categoriImg} alt>
            </div>
            <div class="categori-name">
                <span> ${categorititle} </span>
            </div>
        </div>
        `;
    //create menu list for each categori
    const menuList = document.createElement("div");
    menuList.id = `${categoriSlug}`;
    menuList.classList.add(`${categoriSlug}`);
    menuList.className = "menu-list row justify-content-md-between w-100 mx-1";
    menuListContainer.appendChild(menuList)
    //create menu-title div for each menu list
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.innerHTML = `
            <span class="title-line left-line"></span>
                <h1 class>${categorititle}</h1>
            <span class="title-line right-line"></span>
        `;
    menuList.appendChild(menuTitle)
    const thatItemUrl = `${baseUrl}/app/items/?title=&category=${categoriId}&category__title__icontains=`
    fetch(`${thatItemUrl}`).then((res) => {
      var categoriItems = res.json();
      categoriItems.then(result => {
        var categoriItemsRes = result.results
        getItems(categoriItemsRes, categoriSlug);
      })
    })
  });
}
function getItems(items, slug) {
  // const parentMenulist = document.getElementById(`slug`)
  for (var x = 0; x < items.length; x++) {
    // console.log(items[x])
    //get item' data from db
    var itemtitle = items[x].title,
      itemSlug = items[x].slug,
      itemDescriptin = items[x].description,
      itemId = items[x].id,
      itemImage = items[x].image,
      itemPrice = items[x].unit_price;
    //create menu item div and children item
    const menuItem = document.createElement("div")
    menuItem.className = "menu-item row"
    menuItem.innerHTML = `
            <div class="-12 img-name row">
                <div class="col-5 item-img">
                    <img src=${itemImage} alt>
                </div>
                <div class="col-7 item-name">
                    <h2 class="product-name">
                        ${itemtitle}
                    </h2>
                    <span class="product-caption">
                        ${itemDescriptin}
                    </span>
                </div>
            </div>
            <div class="-12 price-order row">
                <div class="col-5 item-order">
                    <button class="order-btn">
                        جزئیات
                    </button>
                </div>
                <div class="col-7 item-price">
                    <span class="new-price">${itemPrice} </span>
                    <span class="currency">تومان</span>
                </div>
             </div>
        `;
    const targetMenulist = document.getElementById(`${slug}`)
    targetMenulist.appendChild(menuItem)
  }
}