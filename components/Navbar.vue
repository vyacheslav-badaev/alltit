<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a href="/">
        <img src="~assets/images/logo.png" alt="logo" class="logo" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="menu"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="menu"
      class="navbar-menu navbar-end"
      :class="{ 'is-active': isActive }"
    >
      <a class="navbar-item is-active">WHO WE ARE</a>
      <a class="navbar-item">SERVICES</a>
      <a class="navbar-item">CLIENTS</a>
      <a class="navbar-item">CANDIDATES</a>
      <a class="navbar-item">EMPLOYEES</a>
      <a class="navbar-item">CONTACT</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false
    }
  }
}
</script>
