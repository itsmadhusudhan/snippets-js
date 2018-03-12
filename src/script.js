(function(){

const menuLinks = document.querySelectorAll(".menu__link");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar__navigation");
const container = document.querySelector(".content__container");
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");
const allTab = document.querySelector(".tab--all");

function handleLink(e) {
  menuLinks.forEach(link => {
    if (link.parentNode.classList.contains("active__link")) {
      link.parentNode.classList.remove("active__link");
    }
    if (link === e.target) {
      link.parentNode.classList.add("active__link");
      handleClick();
    }
  });
}

function handleClick(e) {
  sidebar.classList.toggle("active__sidebar");
  hamburger.classList.toggle("active__btn");
  container.addEventListener("click", function(e) {
    if (sidebar.classList.contains("active__sidebar")) {
      handleClick();
    }
  });
}

function handleTab(e) {
  // console.log(this.getAttribute("href"));
  let id = document.getElementById(this.getAttribute("href").replace("#", ""));
  tabContent.forEach(content => {
    document
      .getElementById(content.getAttribute("id"))
      .classList.remove("is-active");
    if (
      content.getAttribute("id") === this.getAttribute("href").replace("#", "")
    ) {
      id.classList.add("is-active");
    }
  });
}

//adding event listener to all the side bar links
menuLinks.forEach(link => {
  link.addEventListener("click", handleLink);
});

hamburger.addEventListener("click", handleClick);

//add event listener to all tabs
tabs.forEach(tab => {
  tab.addEventListener("click", handleTab);
});


allTab.addEventListener("click", function(e) {
  const tabsContainer = document.getElementById("all");
  for(let i=0;i<tabsContainer.children.length;i++){
    tabsContainer.children[i].classList.add("is-active");
  }
});
})();