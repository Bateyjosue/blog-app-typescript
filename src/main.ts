import './style.css'
import typescript from './typescript.svg'
import { posts } from './data/posts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`
const headerContent :string[] = ['Home', 'ABout', 'Contact', 'Sign In', 'Sign Up'];
const categoriesTab :string[] = ['Development', 'Design', 'SoftSkills'];
const tags :string[] = ['Development', 'Design', 'JavaScript']

const header = document.querySelector('#header')!;
const categoryTab = document.querySelector('#category__tab ul')!;
const postContainer = document.querySelector('#posts')!;

const placeContent = (content :string) :string => {
  return `<li class='hover:text-black'><a href="#" class="text-white">${content}</a></li>`
}

header.innerHTML = `
  <div class="logo hidden">
    <img src="${typescript}" />
  </div>
  <nav id="navbar" class="hidden lg:block">
    <ul class="flex gap-4">
      ${ headerContent.map((el) => placeContent(el) ).join(" ")}}
    </ul>
  </nav>
  <div class="mobile-nav md:text-darker lg:hidden">
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
`

categoryTab.innerHTML += ` 
  ${categoriesTab.map((category) => placeContent(category)).join('')}
`


posts.map((post) =>{
  postContainer.innerHTML = `
    <article>
        <div>
          <img src="/src/assets/img/mac.webp" alt="">
        </div>
        <div class="py-4 px-4">
          <div class="title flex justify-between py-4">
            <h4 class="text-xl">${post.title}</h4>
            <span class="material-symbols-outlined text-primary">share</span>
          </div>
          <h6 class="py-4 opacity-60 font-bold">${post.pubDate}</h6>
          <p class="text-lg py-4 leading-8">${post.description.slice(0,68)}...</p>
          <div class="flex justify-between py-4">
            <ul id="" class="tags flex gap-4 opacity-50">
            </ul>
            <span class="material-symbols-outlined text-primary">comment</span>
          </div>
        </div>
      </article>
    </section>
  `
});

const tagElements = document.querySelectorAll('.tags')!;

tagElements.forEach((tag) => {
  tag.innerHTML = `#
  ${ tags.map((tag) => placeContent(tag)).join('')}
`
})