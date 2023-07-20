window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUpButton").style.display = "block";
  } else {
    document.getElementById("scrollUpButton").style.display = "none";
  }
}

function scrollTopFunction() {
  const scrollDuration = 100;
  const scrollStep = -window.scrollY / (scrollDuration / 5);

  function smoothScroll() {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollBy(0, scrollStep);
    if (window.scrollY > 0) {
      requestAnimationFrame(smoothScroll);
    } else {
      document.documentElement.style.removeProperty("scroll-behavior");
    }
  }

  requestAnimationFrame(smoothScroll);
}

const listMenu = [
  {
    name: "Coto Makassar",
    image: "assets/images/coto-adi.jpg",
    rating: 5,
    price: "20k",
  },
  {
    name: "Pallu Basa",
    image: "assets/images/adi2.jpg",
    rating: 4,
    price: "27k",
  },
  {
    name: "Kapurung",
    image: "assets/images/kapurung.jpg",
    rating: 4,
    price: "26k",
  },
  {
    name: "Es Pisang Ijo",
    image: "assets/images/es-pisang-ijo.jpg",
    rating: 5,
    price: "21k",
  },
  {
    name: "Mie Titi",
    image: "assets/images/rega-mietiti.jpg",
    rating: 4,
    price: "25k",
  },
];

const containerListMenu = document.getElementById("list-menu");

for (let i = 0; i < listMenu.length; i++) {
  const itemMenu = createItemMenu(listMenu[i]);
  containerListMenu.appendChild(itemMenu.cloneNode(true));
}

function createItemMenu(menu) {
  const menuContainer = document.createElement("section");
  menuContainer.className = "menu";

  const menuImage = document.createElement("img");
  menuImage.setAttribute("src", menu.image);
  menuImage.setAttribute("style", "width: 30%;");
  menuImage.className = "menu-image";

  const menuName = document.createElement("div");
  menuName.className = "menu-name center-vertical";

  const menuH3 = document.createElement("h3");
  menuH3.innerText = menu.name;

  const menuRating = document.createElement("div");
  menuRating.className = "rating";

  menuName.appendChild(menuH3);
  menuName.appendChild(menuRating);

  const ul = document.createElement("ul");
  menuRating.appendChild(ul);

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");

    if (menu.rating <= i) {
      star.setAttribute("class", "fa fa-star-o");
    } else {
      star.setAttribute("class", "fa fa-star");
      star.setAttribute("style", "color: #f5b534;");
    }

    ul.appendChild(star.cloneNode(true));
  }

  const menuPrice = document.createElement("div");
  menuPrice.className = "price center-vertical";
  menuPrice.innerHTML = "<h2>Rp. " + menu.price + "</h2>";

  menuContainer.appendChild(menuImage);
  menuContainer.appendChild(menuName);
  menuContainer.appendChild(menuPrice);

  return menuContainer;
}
