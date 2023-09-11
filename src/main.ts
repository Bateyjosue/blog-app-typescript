import "./style.css";
import typescript from "./typescript.svg";
import posts, {loadPosts} from "./data/posts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
const spinnerContainer = document.querySelector(
  ".spinner__container",
) as HTMLDivElement;
// add event after the page is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    spinnerContainer.style["visibility"] = "visible";
  }, 1000);
  spinnerContainer.style["visibility"] = "hidden";
});
const headerContent: string[] = [
  "Home",
  "ABout",
  "Contact",
  "Sign In",
  "Sign Up",
  `<a>
<span class="material-symbols-outlined md:text-darker lg:text-white md:text-[45px] font-bold">search</span>
</a>`,
];
const categoriesTab: string[] = ["Development", "Design", "SoftSkills"];
const tags: string[] = ["Development", "Design", "JavaScript"];

const header = document.querySelector("#header")!;
const categoryTab = document.querySelector("#category__tab ul")!;
const postContainer = document.querySelector("#posts")!;
const loader = document.querySelector('.loader')!;

const hideLaoder = () => {
  loader.classList.remove('show')
}

const showLoader = () => {
  loader.classList.add('show')
}


const placeContent = (content: string): string => {
  return `<li class='hover:text-black'><a href="#" class="text-white">${content}</a></li>`;
};

header.innerHTML = `
  <div class="logo hidden lg:block">
    <img src="${typescript}" />
  </div>
  <nav id="navbar" class="hidden lg:block">
    <ul class="flex gap-8 items-center">
      ${headerContent.map((el) => placeContent(el)).join(" ")}
    </ul>
  </nav>
  <div class="mobile-nav md:text-darker  lg:hidden">
    <ul class="flex justify-between items-center">
      <li>
        <a>
          <span class="material-symbols-outlined md:text-darker md:text-[45px] font-bold">menu_open</span>
        </a>
      </li>
      <li class=""><img src="${typescript}" class="h-[45px] w-[45px]" /></li>
      <li>
        <a>
          <span class="material-symbols-outlined md:text-darker md:text-[45px] font-bold">search</span>
        </a>
      </li>
    </ul>
  </div>
`;

categoryTab.innerHTML += ` 
  ${categoriesTab.map((category) => placeContent(category)).join("")}
`;

loadPosts(posts, 15, spinnerContainer, postContainer)
const tagElements = document.querySelectorAll(".tags")!;

tagElements.forEach((tag) => {
  tag.innerHTML = `#
  ${tags.map((tag) => placeContent(tag)).join("")}
`;
});

window.addEventListener("scroll", () => {
  const  {scrollTop, scrollHeight, clo} = document.documentElement
})
