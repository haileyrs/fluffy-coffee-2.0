<template>
<header id="header" class="fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <router-link to="/"><h1 class="logo me-auto me-lg-0">Mocha</h1></router-link>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/favorites">Favorites</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div class="header-social-links">
        <a href="https://www.instagram.com/the_hilger_pets/" class="instagram"><i class="bi bi-instagram"></i></a>
      </div>

    </div>
  </header>
</template>

<script>

export default {
    name: 'hdr'
};
</script>

