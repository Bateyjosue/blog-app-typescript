import './style.css'
import typescript from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`
const headerContent :string[] = ['Home', 'ABout', 'Contact', 'Sign In', 'Sign Up'];
const header = document.querySelector('#header')!;
const navBar = (content :string) :string => {
  return `<li class='hover:text-black'><a href="#">${content}</a></li>`
}

headerContent.map((el) => console.log(navBar(el)))

header.innerHTML = `
  <div class="logo hidden border">
    <img src="${typescript}" />
  </div>
  <nav id="navbar" class="hidden lg:block">
    <ul class="flex gap-4">
      ${ headerContent.map((el) => navBar(el) ) }
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