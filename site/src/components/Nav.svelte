<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    background-color: #fff;
    margin-bottom: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    border-bottom: 2px solid red;
  }

  a {
    text-decoration: none;
    padding: 1.5rem 2rem;
    display: block;
  }

  .logo {
    float: left;
    height: 3.33rem;
    margin-top: 0.75rem;
    margin-right: 2rem;
  }
</style>

<nav>
  <div class="container">
    <img
      class="logo"
      alt="Koj"
      src="https://avatars1.githubusercontent.com/u/65495851?s=200&v=4" />
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Status
        </a>
      </li>
      <li>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          About
        </a>
      </li>
      <li>
        <a href="/">GitHub</a>
      </li>
    </ul>
  </div>
</nav>
