// Set the base URL from .env
// baseURL = $DOMAIN;
// url
const itemApi = "http://127.0.0.1:8000/app/items/",
  categoriApi = "http://127.0.0.1:8000/app/categories/";

const swiperWrapper = document.getElementById("swiper-wrapper"),
  menuListContainer = document.getElementById("menu-list-container");

fetch(categoriApi).then((res) => {
  var categoriData = res.json();
  categoriData.then((result) => {
    createCategori(result.results);
  });
});

function createCategori(data) {
  data.forEach((categoriElement) => {
    var categoriId = categoriElement.id;
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
    menuListContainer.appendChild(menuList);
    //create menu-title div for each menu list
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.innerHTML = `
            <span class="title-line left-line"></span>
                <h1 class>${categorititle}</h1>
            <span class="title-line right-line"></span>
        `;
    menuList.appendChild(menuTitle);
    const thatItemUrl = `http://127.0.0.1:8000/app/items/?title=&category=${categoriId}&category__title__icontains=`;
    fetch(`${thatItemUrl}`).then((res) => {
      var categoriItems = res.json();
      categoriItems.then((result) => {
        var categoriItemsRes = result.results;
        getItems(categoriItemsRes, categoriSlug);
      });
    });
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
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item row";
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
    const targetMenulist = document.getElementById(`${slug}`);
    targetMenulist.appendChild(menuItem);
  }
}
