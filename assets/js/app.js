const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let catalogs = $$(".js-cata");
let catalogName = $(".catalog-name");
let pageHome = $("#page-home");
let pageSub = $("#page-sub");
let slideContainer = $(".embla__container2");
let slideItems = $$(".embla__slide2");
let prey = $(".embla__button--prev2");
let next = $(".embla__button--next2");
var currentSlide = 0;
var currentIndex = 0;

catalogs.forEach((element) => {
  element.onclick = function (e) {
    switch (element.innerText) {
      case "Phim Lẻ": {
        $("#feature-cate-page").style.display = "none";
        $("#feature-cate-page").classList.add("hide");
        pageHome.style.display = "none";
        pageSub.style.display = "block";
        catalogName.innerHTML = element.innerText;
        $("#top-film-bo").style.display = "none";
        $("#top-film-le").style.display = "flex";
        $("#top-film-rap").style.display = "none";
        $(".js-title-list").innerHTML = element.innerText;
        $(".js-title-list").style.display = "block";
        $(".page-header").style.display = "none";
        $("#film-bo-list").style.display = "none";
        $("#film-le-list").style.display = "flex";
        $("#film-ott-list").style.display = "none";
        $("#film-rap-list").style.display = "none";
        $("#movie-list-bo").style.display = "none";
        $("#top-week-bo").style.display = "none";
        $("#top-week-le").style.display = "block";
        $("#page-control-1").style.display = "block";
        $("#page-control-2").style.display = "none";
        $("#page-control-3").style.display = "none";
        $(".js-top-day").style.display = "block";
        break;
      }
      case "Phim Bộ": {
        pageHome.style.display = "none";
        pageSub.style.display = "block";
        catalogName.innerHTML = element.innerText;
        $("#top-film-bo").style.display = "flex";
        $("#top-film-le").style.display = "none";
        $("#top-film-rap").style.display = "none";
        $(".js-title-list").innerHTML = element.innerText;
        $(".js-title-list").style.display = "block";
        $(".page-header").style.display = "none";
        $("#film-bo-list").style.display = "flex";
        $("#film-le-list").style.display = "none";
        $("#film-rap-list").style.display = "none";
        $("#film-ott-list").style.display = "none";
        $("#top-week-bo").style.display = "block";
        $("#top-week-le").style.display = "none";
        $("#page-control-1").style.display = "none";
        $("#page-control-2").style.display = "block";
        $("#page-control-3").style.display = "none";
        $(".js-top-day").style.display = "block";
        $("#feature-cate-page").style.display = "none";
        $("#feature-cate-page").classList.add("hide");

        break;
      }

      case "Phim Chiếu Rạp": {
        pageHome.style.display = "none";
        pageSub.style.display = "block";
        catalogName.innerHTML = element.innerText;
        $("#top-film-bo").style.display = "none";
        $("#top-film-le").style.display = "none";
        $("#top-film-rap").style.display = "flex";
        $(".js-title-list").innerHTML = element.innerText;
        $(".js-title-list").style.display = "block";
        $(".page-header").style.display = "none";
        $("#film-bo-list").style.display = "none";
        $("#film-le-list").style.display = "none";
        $("#film-rap-list").style.display = "flex";
        $("#film-ott-list").style.display = "none";
        $("#top-week-bo").style.display = "none";
        $("#top-week-le").style.display = "block";
        $("#page-control-1").style.display = "none";
        $("#page-control-2").style.display = "none";
        $("#page-control-3").style.display = "block";
        $(".js-top-day").style.display = "block";
        $("#feature-cate-page").style.display = "none";
        $("#feature-cate-page").classList.add("hide");
        break;
      }
      case "OTT": {
        pageHome.style.display = "none";
        pageSub.style.display = "block";
        catalogName.innerHTML = element.innerText;
        $("#top-film-bo").style.display = "none";
        $("#top-film-le").style.display = "none";
        $("#top-film-rap").style.display = "none";
        $(".js-title-list").style.display = "none";
        $(".page-header").style.display = "flex";
        $(".page-header .page-title").innerHTML = element.innerText;
        $("#film-bo-list").style.display = "none";
        $("#film-le-list").style.display = "none";
        $("#film-rap-list").style.display = "none";
        $("#film-ott-list").style.display = "flex";
        $("#top-week-bo").style.display = "block";
        $("#top-week-le").style.display = "none";
        $("#page-control-1").style.display = "none";
        $("#page-control-2").style.display = "none";
        $("#page-control-3").style.display = "block";
        $(".js-top-day").style.display = "none";
        $("#feature-cate-page").style.display = "block";
        $("#feature-cate-page").classList.remove("hide");

        break;
      }
      default: {
        pageHome.style.display = "block";
        pageSub.style.display = "none";
      }
    }
  };
});
function change(a) {
  if (a === 1) {
    if (currentIndex < 1) {
      return;
    }
    if (currentIndex === 1) {
      currentSlide += (slideContainer.offsetWidth * 70) / 100;
    } else {
      currentSlide += (slideContainer.offsetWidth * 80) / 100;
    }
    slideContainer.style.transform = `translateX(${currentSlide}px)`;
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
      currentSlide = 0;
      slideContainer.style.transform = `translateX(${currentSlide}px)`;
    }
  }
  if (a === -1) {
    if (currentIndex === 0 || currentIndex === slideItems.length - 2) {
      currentSlide -= (slideContainer.offsetWidth * 70) / 100;
    } else {
      currentSlide -= (slideContainer.offsetWidth * 80) / 100;
    }
    slideContainer.style.transform = `translateX(${currentSlide}px)`;
    currentIndex++;
    if (currentIndex > slideItems.length - 1) {
      currentIndex = 0;
      currentSlide = 0;
      slideContainer.style.transform = `translateX(${currentSlide}px)`;
    }
  }
}
prey.onclick = function () {
  change(1);
};
next.onclick = function () {
  change(-1);
};
setInterval(function () {
  change(-1);
}, 2000);
