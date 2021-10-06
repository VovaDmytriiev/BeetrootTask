//======================           BURGER           ==========================================
$("document").ready(function () {
  $(".burger").click(function (event) {
    $(".burger, .menu__list").toggleClass("active");
    $("body").toggleClass("lock-scroll");
  });
});
//============================================================================================

//======================           SCROLL ANIMATION            ==========================================
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

