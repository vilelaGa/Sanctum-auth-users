<template>
  <main class="container">
    <div class="mt-5 bg-light p-5 rounded">
      <h1>Bem vindo ao sistema nuxt</h1>
      <p class="lead">
        This example is a quick exercise to illustrate how the top-aligned
        navbar works. As you scroll, this navbar remains in its original
        position and moves with the rest of the page.
      </p>
      <span class="btn btn-lg btn-white" role="button"
        ><NuxtLink to="/login">Login &raquo;</NuxtLink></span
      >
      <span class="btn btn-lg btn-white" role="button"
        ><NuxtLink to="/register">Register &raquo;</NuxtLink></span
      >
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'padrao',
}
</script>
