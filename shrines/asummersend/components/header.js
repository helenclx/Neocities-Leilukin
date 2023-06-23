class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img src="./img/asummersend_header.png" alt="">
            </header>
            <nav>
                <ul class="nav__menu">
                    <li class="nav__title"><a href="/shrines/asummersend/">A Summer's End</a></li>
                    <li class="nav__item"><a href="/shrines/asummersend/">Shrine Home</a></li>
                    <li class="nav__item"><a href="./playlists.html">Playlists</a></li>
                    <li class="nav__item"><a href="./trivia.html">Trivia</a></li>
                    <li class="nav__item"><a href="/blog">Blog</a></li>
                    <li class="nav__item"><a href="./gallery.html">Gallery</a></li>
                    <li class="nav__item"><a href="/home.html">Main Site</a></li>
                    <li class="nav__toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        `;
    }
}
  
customElements.define('header-component', Header);  