import './style.css'
import typescript from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`
const headerContent :string[] = ['Home', 'ABout', 'Contact', 'Sign In', 'Sign Up'];
const categoriesTab :string[] = ['Development', 'Design', 'SoftSkills'];

const header = document.querySelector('#header')!;
const categoryTab = document.querySelector('#category__tab ul')!;

const placeContent = (content :string) :string => {
  return `<li class='hover:text-black'><a href="#" class="text-white">${content}</a></li>`
}

header.innerHTML = `
  <div class="logo hidden border">
    <img src="${typescript}" />
  </div>
  <nav id="navbar" class="hidden lg:block">
    <ul class="flex gap-4">
      ${ headerContent.map((el) => placeContent(el) ).join(" ")}}
    </ul>
  </nav>
  <div class="mobile-nav lg:hidden">
    <ul class="flex justify-between items-center">
      <li>
        <a>
          <span class="material-symbols-outlined">menu_open</span>
        </a>
      </li>
      <li class=""><img src="${typescript}"/></li>
      <li>
        <a>
          <span class="material-symbols-outlined">search</span>
        </a>
      </li>
    </ul>
  </div>
`

categoryTab.innerHTML += ` 
  ${categoriesTab.map((category) => placeContent(category)).join('')}
`