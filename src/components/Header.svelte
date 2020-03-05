<script>
  let y = 0;
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 8px 16px;
    transition: all 0.5s linear 0.15s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .transparent {
    background: rgba(255, 255, 255, 0);
  }
  .filled {
    background: rgb(80, 79, 79, 1);
    color: rgb(255, 255, 255);
    box-shadow: 0px 2px 10px 5px rgba(80, 79, 79,0.5);
  }
  .nav_list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .nav_list-item {
    display: inline;
  }
  .nav_list-item a {
    padding: 11px;
  }
  .filled .nav_list-item a:hover {
    background-color: rgb(59, 52, 52);
  }

  .nav-title {
    min-width: 100px;
    flex: 0;
  }
  @media screen and (max-width: 640px) {
    .nav_list-item a {
      padding: 11px 4px;
    }
  }
  @media screen and (max-width: 580px) {
    .nav-wrapper {
      visibility: hidden;
      display: none;
    }
  }
</style>

<svelte:window bind:scrollY={y} />
<nav class={y < 48 ? 'transparent' : 'filled'}>
  <div class="nav-title">
    <a href="#home">Jose Navarro</a>
  </div>
  <div class="nav-wrapper">
    <ul class="nav_list">
      <li class="nav_list-item">
        <a href="#experience">Experience</a>
      </li>
      <li class="nav_list-item">
        <a href="#education">Education</a>
      </li>
      <li class="nav_list-item">
        <a href="#projects">Projects</a>
      </li>
      <li class="nav_list-item">
        <a href="#publications">Publications</a>
      </li>
      <li class="nav_list-item">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
