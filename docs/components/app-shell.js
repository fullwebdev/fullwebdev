import { html } from "lit-html";

export default () => html` <header class="navbar">
    <div class="sidebar-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        viewBox="0 0 448 512"
        class="icon"
      >
        <path
          fill="currentColor"
          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
        ></path>
      </svg>
    </div>
    <a class="nav-link" href="/">
      <img
        src="/images/favicon/icon-384x384.png"
        alt="FullWeb.dev"
        class="logo"
      />
      <span class="site-name can-hide">FullWeb.dev</span>
    </a>
    <aside class="sidebar">
      <nav class="nav-links">
        <div class="nav-item">
          <a href="/" class="nav-link">
            Home
          </a>
        </div>
        <div class="nav-item">
          <a
            href="/about/"
            class="nav-link router-link-exact-active router-link-active"
            aria-current="page"
          >
            About
          </a>
        </div>
        <!-- <div class="nav-item">
          <div class="dropdown-wrapper">
            <button type="button" aria-label="Languages" class="dropdown-title">
              <span class="title">Languages</span> <span class="arrow right"></span>
            </button>
            <ul class="nav-dropdown" style="display: none;">
              <li class="dropdown-item">
                <a href="/about/" aria-current="page" class="nav-link router-link-exact-active router-link-active">
                  English
                </a>
              </li>
              <li class="dropdown-item">
                <a href="/fr/about/" class="nav-link">
                  Français
                </a>
              </li>
            </ul>
          </div>
        </div> -->
        <a
          href="https://github.com/fullwebdev/fullwebdev"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-link"
        >
          GitHub
        </a>
      </nav>
      <ul class="sidebar-links">
        <li><a href="/" aria-current="page" class="sidebar-link">Home</a></li>
        <li>
          <a href="/about/" class="active sidebar-link" aria-current="page"
            >Introduction</a
          >
        </li>
        <li>
          <a href="/conferences/" class="sidebar-link"
            >Conferences &amp; Events</a
          >
        </li>
        <li><a href="/codelabs/" class="sidebar-link">Codelabs</a></li>
        <li><a href="/inventory/" class="sidebar-link">Inventory</a></li>
        <li><a href="/flashcards/" class="sidebar-link">Flashcards</a></li>
        <li><a href="/material/" class="sidebar-link">Material</a></li>
      </ul>
    </aside>
    <div class="links" style="max-width: 1553px;">
      <nav class="nav-links can-hide">
        <div class="nav-item">
          <a href="/" class="nav-link">
            Home
          </a>
        </div>
        <div class="nav-item">
          <a
            href="/about/"
            class="nav-link router-link-exact-active router-link-active"
            aria-current="page"
          >
            About
          </a>
        </div>
        <!-- <div class="nav-item">
              <div class="dropdown-wrapper">
                <button type="button" aria-label="Languages" class="dropdown-title">
                  <span class="title">Languages</span> <span class="arrow right"></span>
                </button>
                <ul class="nav-dropdown" style="display: none;">
                  <li class="dropdown-item">
                    <a href="/en/about/" aria-current="page" class="nav-link router-link-exact-active router-link-active">
                      English
                    </a>
                  </li>
                  <li class="dropdown-item">
                    <a href="/fr/about/" class="nav-link">
                      Français
                    </a>
                  </li>
                </ul>
              </div>
            </div> -->
        <a
          href="https://github.com/fullwebdev/fullwebdev"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-link"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
  <aside class="sidebar">
    <nav class="nav-links">
      <div class="nav-item">
        <a href="/" class="nav-link">
          Home
        </a>
      </div>
      <div class="nav-item">
        <a
          href="/about/"
          class="nav-link router-link-exact-active router-link-active"
          aria-current="page"
        >
          About
        </a>
      </div>
      <div class="nav-item">
        <div class="dropdown-wrapper">
          <button type="button" aria-label="Languages" class="dropdown-title">
            <span class="title">Languages</span>
            <span class="arrow right"></span>
          </button>
          <ul class="nav-dropdown" style="display: none;">
            <li class="dropdown-item">
              <a
                href="/about/"
                aria-current="page"
                class="nav-link router-link-exact-active router-link-active"
              >
                English
              </a>
            </li>
            <li class="dropdown-item">
              <a href="/fr/about/" class="nav-link">
                Français
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="https://github.com/fullwebdev/fullwebdev"
        target="_blank"
        rel="noopener noreferrer"
        class="repo-link"
      >
        GitHub
      </a>
    </nav>
    <ul class="sidebar-links">
      <li><a href="/" aria-current="page" class="sidebar-link">Home</a></li>
      <li>
        <a href="/about/" class="active sidebar-link" aria-current="page"
          >Introduction</a
        >
      </li>
      <li>
        <a href="/conferences/" class="sidebar-link"
          >Conferences &amp; Events</a
        >
      </li>
      <li><a href="/codelabs/" class="sidebar-link">Codelabs</a></li>
      <li><a href="/inventory/" class="sidebar-link">Inventory</a></li>
      <li><a href="/flashcards/" class="sidebar-link">Flashcards</a></li>
      <li><a href="/material/" class="sidebar-link">Material</a></li>
    </ul>
  </aside>`;
