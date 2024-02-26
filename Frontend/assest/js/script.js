const baseUrl = 'http://localhost:8000/'

//url
const categoriesUrl = `${baseUrl}app/categories/`;
const itemsUrl = `${baseUrl}app/items/`;

//valriables we use i
const menuListContainer = document.getElementById("menu-list-container");
const firstMenuListContainer = document.getElementById("first-menu-list-container")
const categoryContainer = document.getElementById("categori-container");
const swiperWrapper = document.getElementById("swiper-wrapper");
const preLoad = document.getElementById("preload");

window.onload = entery();

function entery() {
  preLoad.style.display = 'none';
  fetch(categoriesUrl).then(res => res.json()).then((data) => {
    categoryCreate(data.results)
  });

  fetch(itemsUrl).then((res) => res.json()).then((data) => {
    itemCreate(data.results);
    $grid = $('.menu-list-container').isotope({
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });
  });
  menuListContainer.style.display = "none"
}
function categoryCreate(categories) {
  for (let x in categories) {
    var category_id = categories[x].id;
    var category_title = categories[x].title;
    var category_slug = categories[x].slug;
    var category_image = categories[x].image;

    var swiper_slide = document.createElement("div")
    swiper_slide.classList.add("swiper-slide")
    swiper_slide.setAttribute("target-menu", `.c${category_id}`);
    var categori_card = document.createElement("div")
    categori_card.classList.add("categori-card")
    swiperWrapper.append(swiper_slide);
    swiper_slide.append(categori_card);
    categori_card.innerHTML = `
    <div class="categori-icon">
      <img class="categori-icon-img" src="${category_image}" alt="">
    </div>
    <div class="categori-name">
      <span class="categori-name-span"> ${category_title} </span>
    </div>
    `

    swiper_slide.addEventListener("click", (event) => {
      firstMenuListContainer.style.display = "none"
      menuListContainer.style.display = "flex"
      var Target = event.target;
      var targetClass = event.target.classList[0]
      var targetDom;
      if (targetClass == "categori-card") {
        targetDom = event.target.parentElement
      }
      else if (targetClass == "categori-icon") {
        targetDom = event.target.parentElement.parentElement;
      }
      else if (targetClass == "categori-icon-img") {
        targetDom = event.target.parentElement.parentElement.parentElement;
      }
      else if (targetClass == "categori-name") {
        targetDom = event.target.parentElement.parentElement;
      }
      else if (targetClass == "categori-name-span") {
        targetDom = event.target.parentElement.parentElement.parentElement;
      }
      else {
        console.log("are you sure you click on write point?")
      }
      // console.log(targetDom.getAttribute("target-menu"))
      var target_menu = targetDom.getAttribute("target-menu");
      filtering(target_menu)
      console.log()
    })
  }
}

function itemCreate(items) {
  fetch(`${baseUrl}app/items/?title=&category=1&category__title__icontains=`)
    .then(res => res.json()).then((data) => {
      firstItem(data.results)
    })
  for (let x in items) {
    var item_id = items[x].id,
      item_title = items[x].title,
      item_slug = items[x].slug,
      item_image = items[x].image,
      item_available = items[x].available,
      item_category = items[x].category,
      item_description = items[x].description,
      item_price = items[x].unit_price;
    var menu_item = document.createElement("div")
    menu_item.className = `menu-item c${item_category} row col-12 col-md-2`
    menu_item.innerHTML = `
      <div class="img-name">
       <div class="item-img">
         <img src="${item_image}" alt="${item_slug}">
        </div>
       <div class="product-name">
         <span class="item-title">
           ${item_title}
          </span>
         <span class="product-caption">
            ${item_description}
         </span>
        </div>
      </div>
      <div class="price-info">
         <button class="info-btn">
           توضیحات
         </button>
          <div class="item-price">
             <span class="price">${item_price}</span>
             <span class="curency">تومان</span>
          </div>
        </div>
    `;
    menuListContainer.append(menu_item)
  }
}

let $grid;

function filtering(value) {
  console.log(value);

  if (!$grid) {
    $grid = $('.menu-list-container').isotope({
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });
  }
  else {
    $grid.isotope({ filter: value });
  }
}

function firstItem(firstItem) {
  for (let x in firstItem) {
    var item_id = firstItem[x].id,
      item_title = firstItem[x].title,
      item_slug = firstItem[x].slug,
      item_image = firstItem[x].image,
      item_available = firstItem[x].available,
      item_category = firstItem[x].category,
      item_description = firstItem[x].description,
      item_price = firstItem[x].unit_price;
    var menu_item = document.createElement("div")
    menu_item.className = `menu-item c${item_category} row col-12 col-md-2`
    menu_item.innerHTML = `
      <div class="img-name">
       <div class="item-img">
         <img src="${item_image}" alt="${item_slug}">
        </div>
       <div class="product-name">
         <span class="item-title">
           ${item_title}
          </span>
         <span class="product-caption">
            ${item_description}
         </span>
        </div>
      </div>
      <div class="price-info">
         <button class="info-btn">
           توضیحات
         </button>
          <div class="item-price">
             <span class="price">${item_price}</span>
             <span class="curency">تومان</span>
          </div>
        </div>
    `;
    firstMenuListContainer.append(menu_item)
  }
}