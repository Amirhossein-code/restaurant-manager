const baseUrl = 'http://5.34.196.45:8000'

// wow library init
new WOW().init();

//swiper library init
var swiper = new Swiper(".swiper", {
  slidesPerView: 4.5,
  spaceBetween: 10,
  loop: false,
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
  nav = document.getElementById("mobile-nav"),
  menu = document.getElementById("mobile-menu"),
  preload = document.getElementById("preload"),
  info = document.getElementById("infoContainer"),
  ingradient = document.getElementById("ingradientTable"),
  foodValue = document.getElementById("foodValueTable"),
  colseInfo = document.getElementById("colseInfo"),
  orderBtns = document.getElementsByClassName("order-btn"),
  ingTable = document.getElementById("ingradientTable"),
  fdTable = document.getElementById("foodValueTable"),
  infoContainer = document.getElementById("infoContainer"),
  closeLink = document.getElementById("closeLink"),
  menuLists = document.getElementsByName("menu-list")

//  first enter things need to do -
// every time site reaload or loaded this thing need to happend
// window.onload(() => {
//   console.log("hi")
//   preload.style.display = "none";
//   themecontainer.addEventListener("click", () => {
//     themecontainer.classList.toggle("dark");
//     let bodyTheme = document.body.getAttribute("theme");
//     if (themecontainer.classList.contains("dark")) {
//       document.body.setAttribute("theme", "dark");
//     }
//     else {
//       document.body.setAttribute("theme", "light");
//     }
//   })
//   // url
//   const itemApi = `${baseUrl}/app/items/`,
//     categoriApi = `${baseUrl}/app/categories/`;

//   const swiperWrapper = document.getElementById("swiper-wrapper"),
//     menuListContainer = document.getElementById("menu-list-container")

//   fetch(categoriApi).then((res) => {
//     var categoriData = res.json();
//     categoriData.then(result => {
//       createCategori(result.results);
//     })
//   });

// })

//


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

window.addEventListener("click", () => {
  preload.style.display = "none";
  themecontainer.addEventListener("click", () => {
    themecontainer.classList.toggle("dark");
    var bodyTheme = document.body.getAttribute("theme");
    if (themecontainer.classList.contains("dark")) {
      document.body.setAttribute("theme", "dark");
    }
    else {
      document.body.setAttribute("theme", "light");
    }
  })
})
// none the displaye of the other menus

// menuListesContainer["children"][0].classList.remove("animated");
// menuListesContainer["children"][0].classList.add("animated");

//set onclick event to all categoris
for (let x = 0; x < categori.length; x++) {
  categori[x].setAttribute('onclick', 'showMenu(event)')
}
//show first catgories menu items in the first view and enter of the page

// menuListesContainer["children"][0].style.display = 'flex'
// menuLists[0].style.display

// categoriCard[0].classList.add("active");

// none the displaye of the other menus
//  
// menuListesContainer["children"][0].classList.remove("animated");
// menuListesContainer["children"][0].classList.add("animated");

infoContainer.addEventListener("click", () => {
  closeInfoC()
})

function closeInfoC() {
  console.log("close")
  infoContainer.style.display = 'none'
}
function selectInfo(event) {
  fdTable.innerHTML = ''
  ingTable.innerHTML = ''
  infoContainer.style.display = 'flex'
  infoContainer.style.width = '100%'
  const targetItemTitle = event.target.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.firstElementChild.innerHTML
  fetch(`${baseUrl}/app/items/?title=${targetItemTitle}&category=&category__title__icontains=`)
    .then(respon => {
      const item = respon.json()
      item.then((data) => {
        const targetItemSlug = data.results[0].slug
        showInfo(targetItemSlug);
      })
    })
}

function showInfo(slug) {
  var ingUrl = `${baseUrl}/app/items/${slug}/ingredients/`
  var fdUrl = `${baseUrl}/app/items/${slug}/food-values/`
  ingShow(ingUrl);
  fdShow(fdUrl);
}

function ingShow(url) {
  fetch(url).then(respon => {
    const ing = respon.json()
    ing.then((datas) => {
      datas.forEach((data) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
          <td> ${data.title} </td>
          <td> ${data.weight}  ${data.unit} </td>
        `
        ingTable.appendChild(tr)
      })
    })
  })
}

function fdShow(url) {
  fetch(url).then(respon => {
    var fd = respon.json()
    fd.then((datas) => {
      datas.forEach((data) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
          <td> ${data.title} </td>
          <td> ${data.value}  ${data.unit} </td>
        `
        fdTable.appendChild(tr)
      })
    })
  })
}

// show categoris exact menu by clicking on
async function showMenu(event) {
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

  targetMenu.style.display = 'flex';
  // targetMenu.classList.remove("animated");
  // targetMenu.classList.add("animated");



  for (let q = 0; q < categoriCard.length; q++) {
    // categoriCard[q].classList.remove("active");
  }
  // activeTarget.classList.add("active");
  let animetarget = "#" + targetValue + " " + ".menu-item"
}



//======= get data from db and set it to the page
async function createCategori(data) {
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
async function getItems(items, slug) {
  // const parentMenulist = document.getElementById(`slug`)
  for (var x = 0; x < items.length; x++) {
    // console.log(items[x])
    //get item' data from db
    var itemtitle = items[x].title,
      itemSlug = items[x].slug,
      itemDescriptin = items[x].description,
      itemId = items[x].id,
      itemImage = items[x].image,
      itemPrice = items[x].unit_price,
      itemAvailble = items[x].available;
    //create menu item div and children item
    const menuItem = document.createElement("div")
    menuItem.className = "menu-item row"
    if (itemAvailble = 'YES') {
      if (itemDescriptin != null) {
        menuItem.innerHTML = `
        <div class="img-name row">
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
        <div class="price-order row">
            <div class="col-5 item-order">
                <button onclick="selectInfo(event)" class="order-btn">
                    جزئیات
                </button>
            </div>
            <div class="col-7 item-price">
                <span class="new-price">${itemPrice} </span>
                <span class="currency">تومان</span>
            </div>
         </div>
    `;
      }
      else {
        menuItem.innerHTML = `
        <div class="img-name row">
            <div class="col-5 item-img">
                <img src=${itemImage} alt>
            </div>
            <div class="col-7 item-name">
                <h2 class="product-name">
                    ${itemtitle}
                </h2>
                <span class="product-caption">
                    
                </span>
            </div>
        </div>
        <div class="price-order row">
            <div class="col-5 item-order">
                <button onclick="selectInfo(event)" class="order-btn">
                    جزئیات
                </button>
            </div>
            <div class="col-7 item-price">
                <span class="new-price">${itemPrice} </span>
                <span class="currency">تومان</span>
            </div>
         </div>
    `;
      }
    }

    else {
      if (itemDescriptin != null) {
        menuItem.innerHTML = `
              <div class="img-name row">
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
              <div class="price-order row">
                  <div class="col-5 item-order">
                      <button onclick="selectInfo(event)" class="order-btn">
                          جزئیات
                      </button>
                  </div>
                  <div class="col-7 item-price">
                      <span class="new-price"> نا موجود </span>
                      <span class="currency"></span>
                  </div>
               </div>
          `;
      }
      else {
        menuItem.innerHTML = `
        <div class="img-name row">
            <div class="col-5 item-img">
                <img src=${itemImage} alt>
            </div>
            <div class="col-7 item-name">
                <h2 class="product-name">
                    ${itemtitle}
                </h2>
                <span class="product-caption">
                    
                </span>
            </div>
        </div>
        <div class="price-order row">
            <div class="col-5 item-order">
                <button onclick="selectInfo(event)" class="order-btn">
                    جزئیات
                </button>
            </div>
            <div class="col-7 item-price">
                <span class="new-price"> نا موجود </span>
                <span class="currency"></span>
            </div>
         </div>
    `;
      }
    }

    var targetMenulist = document.getElementById(`${slug}`)
    targetMenulist.appendChild(menuItem)
  }
}