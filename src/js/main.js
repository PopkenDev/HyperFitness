const openMenuTab = document.querySelector("#open-menu-tab");
const menuTab = document.querySelector("#menu-tab");
const menuTabIcon = document.querySelector(".menu-tab-icon");
const openMobileMenu = document.querySelector("#open-mobile-menu");
const closeMobileMenu = document.querySelector("#close-mobile-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const html = document.querySelector("html");
const bgBackdrop = document.querySelector("#bg-backdrop");

openMenuTab.addEventListener("click", () => {
  menuTabIcon.classList.toggle("rotate-90");
  menuTab.classList.toggle("hidden");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  bgBackdrop.classList.add("opacity-0", "invisible", "pointer-events-none");
  bgBackdrop.classList.remove("opacity-90", "visible", "pointer-events-auto");
  html.classList.remove("overflow-hidden");
});
openMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  bgBackdrop.classList.remove("opacity-0", "invisible", "pointer-events-none");
  bgBackdrop.classList.add("opacity-90", "visible", "pointer-events-auto");
  html.classList.add("overflow-hidden");
});

// Product Slider data
const fullStar = `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
      class="h-6 w-6 text-yellow-500"
    >
    <path
      fill="currentColor"
      d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
    />
  </svg>
  `;
const halfStar = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    class="h-6 w-6 text-yellow-500"
  >
    <path
      fill="currentColor"
      d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-8.27-2.32V32.09l23.2 55.28a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z"
    />
  </svg>
  `;
let createProductCards = () => {
  const slider2 = document.getElementById("slider2");

  productData.map((product) => {
    let {
      id,
      name,
      price,
      image,
      title,
      specifications,
      category,
      rating,
      reviews,
    } = product;

    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;

    slider2.innerHTML += `
        <li id="${id}" class="product-card h-[525px] p-2">
                  <div class="h-full bg-white py-2 relative">
                    <div>
                      <a href="#">
                        <img
                          class="h-44 w-full object-contain rounded-md"
                          src="${image}"
                          alt="${name}"
                        />
                      </a>
                    </div>
                    <div class="w-full px-3">
                      <div class="mb-2 mt-2 flex items-center">
                       ${fullStar.repeat(fullStars)}${halfStars ? halfStar : ""}
                       
                        <p class="text-xs ml-1">(${reviews} reviews)</p>
                      </div>
                      <p class="text-lg font-bold line-clamp-2 mb-4">
                        ${title}
                      </p>
                      <ul class="list-disc ml-4 mb-8">
                        <li class="max-w-full text-xs leading-5 mb-2">
                          ${specifications.spec1}
                        </li>
                        <li class="max-w-full text-xs leading-5 mb-2">
                          ${specifications.spec2}
                        </li>
                        <li class="max-w-full text-xs leading-5 mb-2">
                          ${specifications.spec3}
                        </li>
                      </ul>
                      <p class="text-lg font-bold absolute bottom-2 left-3">
                        $${price}
                      </p>
                    </div>
                  </div>
                </li>
        `;
  });
};
createProductCards();

// PRODUCT SLIDER
const sliderContainer = document.getElementById("sliderContainer");
const slider = document.getElementById("slider");
const cards = slider.getElementsByClassName("product-card");
let elementsToShow;

if (window.innerWidth < 768) {
  elementsToShow = 1.3;
} else if (window.innerWidth < 1024) {
  elementsToShow = 2;
} else if (window.innerWidth < 1280) {
  elementsToShow = 2.3;
} else if (window.innerWidth < 1536) {
  elementsToShow = 3.3;
} else {
  elementsToShow = 4;
}

console.log(elementsToShow);
let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;
slider.style.width = `${cards.length * cardWidth}px`;

for (let i = 0; i < cards.length; i++) {
  const element = cards[i];
  element.style.width = `${cardWidth}px`;
}

function prev() {
  console.log(+slider.style.marginLeft.slice(0, -2));
  if (+slider.style.marginLeft.slice(0, -2) < 0)
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
}

function next() {
  if (
    +slider.style.marginLeft.slice(0, -2) >
    -cardWidth * (cards.length - elementsToShow)
  )
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
}

// PRODUCT SLIDER 2
const sliderContainer2 = document.getElementById("sliderContainer2");
const slider2 = document.getElementById("slider2");
const cards2 = slider2.getElementsByClassName("product-card");

let elementsToShow2;

if (window.innerWidth < 768) {
  elementsToShow2 = 1.3;
} else if (window.innerWidth < 1024) {
  elementsToShow2 = 2;
} else if (window.innerWidth < 1280) {
  elementsToShow2 = 2.3;
} else if (window.innerWidth < 1536) {
  elementsToShow2 = 3.3;
} else {
  elementsToShow2 = 4;
}

let sliderContainerWidth2 = sliderContainer2.clientWidth;

let cardWidth2 = sliderContainerWidth2 / elementsToShow2;
slider2.style.width = `${cards2.length * cardWidth2}px`;

for (let i = 0; i < cards2.length; i++) {
  const element = cards2[i];
  element.style.width = `${cardWidth2}px`;
}

function prev2() {
  if (+slider2.style.marginLeft.slice(0, -2) < 0)
    slider2.style.marginLeft =
      +slider2.style.marginLeft.slice(0, -2) + cardWidth2 + "px";
}

function next2() {
  if (
    +slider2.style.marginLeft.slice(0, -2) >
    -cardWidth2 * (cards2.length - elementsToShow)
  )
    slider2.style.marginLeft =
      +slider2.style.marginLeft.slice(0, -2) - cardWidth2 + "px";
}
