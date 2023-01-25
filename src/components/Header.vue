<template>
<header id="header" class="fixed-top">
  <div class="container-fluid d-flex justify-content-between align-items-center">
    <b-navbar toggleable="sm">
      <router-link to="/"><h1 class="logo me-auto me-lg-0">Mocha</h1></router-link>

      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text><router-link to="/">Home</router-link></b-nav-text>
          <b-nav-text><router-link to="/about" active-class="active">About</router-link></b-nav-text>
          <b-nav-text><router-link to="/favorites" active-class="active">Favorites</router-link></b-nav-text>
          <b-nav-text><router-link to="/portfolio" active-class="active">Portfolio</router-link></b-nav-text>
          <b-nav-text><router-link to="/contact" active-class="active">Contact</router-link></b-nav-text>
        
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item class="header-social-links">
            <a href="https://www.instagram.com/the_hilger_pets/"><v-icon>mdi-instagram</v-icon></a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
</div>
</header>
</template>

<script>

export default {
    name: 'hdr'
};
</script>

