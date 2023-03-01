<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <span class="text-white"
        ><NuxtLink to="/"><NuxtLogo /></NuxtLink> Nuxt - Sanctum</span
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Info</em>
          </template>
          <b-dropdown-item
            ><NuxtLink to="/login">Login</NuxtLink>
          </b-dropdown-item>
          <b-dropdown-item
            ><NuxtLink to="/register">Register</NuxtLink></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NuxtNav',
}
</script>
