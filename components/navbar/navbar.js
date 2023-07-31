import '../../styles/navbar.css'
import { navBarTop } from './navBarTop'
import { navBarMobile } from './navBarMobile'

export function setNavBar() {
    const body = document.querySelector('body')
    body.appendChild(navBarMobile())

    const header = document.querySelector('header')
    header.innerHTML = ` 
      <div class="top-info">
        <i class="fa-solid fa-tags"></i>
        <span>40% off all products. Use code: TPSI0922</span>
      </div>
    `

    header.appendChild(navBarTop())
}