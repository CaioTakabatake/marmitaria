const header = document.querySelector("header");
const navigationHeader = document.querySelector('nav');
const content = document.querySelector("main");
let showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    console.log(navigationHeader);
    navigationHeader.style.marginLeft = "-16px";
    navigationHeader.style.animationName = "showSidebar";
    content.style.filter = "blur(2px)";
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "closeSidebar";
    content.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});
