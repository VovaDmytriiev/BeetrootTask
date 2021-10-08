//======================           BURGER           ====================================================
$("document").ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock-scroll");
  });
});
//======================================================================================================
//======================          SMOOTH SCROLL            =============================================
//We are looking for menu items who have atribute data-goto
const menuItems = document.querySelectorAll(".header__link[data-goto]");
//Check if such elements exist
if (menuItems.length > 0) {
  //We hang on the click listener menu
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", onMenuItemClick);
  });
  function onMenuItemClick(e) {
    //Get the click value
    const menuItem = e.target;
    if (
      //We check if there is something and whether the object we are referring to exists
      menuItem.dataset.goto &&
      document.querySelector(menuItem.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuItem.dataset.goto);
      //We are looking at what height relative to the top is the block to which you need to go down
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
      //Scroll
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
//======================================================================================================

//======================           SCROLL ANIMATION            =========================================
// looking for elements that will be animated
const animItems = document.querySelectorAll(".anim-items");
//Check if such elements exist
if (animItems.length > 0) {
  //Add a listener to the entire browser window for the function animOnScroll to be executed
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    //Getting each element from the loop
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      //Get the height of each object
      const animItemHeight = animItem.offsetHeight;
      //Get the position of an object relative to the top
      const animItemOffset = offset(animItem).top;
      //Animation start adjustment factor
      const animStart = 4;

      //Setting the moment of the start of the animation relative to the height of the browser window
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      //We check that the object is not higher than the height of the browser window
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      //Add a class to objects that will be animated or already animated
      if ((pageYOffset > (animItemOffset - animItemPoint)) &&
        (pageYOffset < (animItemOffset + animItemHeight))
      ) {
        animItem.classList.add("_active", "no-anim");
      } else {
        //We remove the class for objects that will already be animated
        if (!animItem.classList.contains("no-anim")) {
          animItem.classList.remove("_active");
        }
      }
    }
    //A function from the Internet that calculates at what height an object is 
    //relative to the top of the browser window
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  // We run the function for those objects that are already (immediately)
  // in the field of view with a slight delay
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
//============================================================================================
//==============================      MAP    =================================================

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
//============================================================================================
