let headerTab = document.getElementById("header-tab");
let stickyHead = headerTab.offsetTop;
let headHeight = headerTab.offsetHeight;
let leftNav = document.getElementsByClassName("left")[0];
let list = document.querySelector(".left").querySelectorAll("li");

function onScrollPos() {
  if (window.pageYOffset >= stickyHead) {
    headerTab.classList.add("active-header-tab");
  } else {
    headerTab.classList.remove("active-header-tab");
  }

  leftNav.style.top = headHeight + "px";
}

const navItems = document.querySelectorAll(".left ul li a");

for (const i of navItems) {
  i.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const topPos = document.querySelector(href).offsetTop;
  let setPos = topPos - headHeight;
  scroll({
    top: setPos,
    behavior: "smooth",
  });
}

list.forEach((element) => {
  element.addEventListener("click", function () {
    list.forEach((ele) => ele.classList.remove("active"));

    this.classList.add("active");
  });
});

// mobileview
const swig = document.getElementsByClassName("swig-flex");
for (i = 0; i < swig.length; i++) {
  swig[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
