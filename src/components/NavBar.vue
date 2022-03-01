<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <div class=row>
    <div class="col-sm" >
  <router-link class="navbar-brand mb-0 h1" to="/">Vue Todo App</router-link>
    </div>

  <!-- <div class="collapse navbar-collapse col-sm navbar-nav mr-auto" id="navbarSupportedContent"> -->
      <div class="nav-item active col-sm">
        <router-link style="color: grey;" class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </div>
      <div class="nav-item col-sm">
        <router-link style="color: grey;" class="nav-link" to="/about">About Us</router-link>
      </div>
  <!-- </div> -->
        </div>
    </div>
</nav>
</template>

<style scoped>

@media screen and (max-width: 340px) {
  nav {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
  }
}
</style>