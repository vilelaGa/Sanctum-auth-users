<template>
  <footer class="fixed-bottom p-2 bg-primary text-white text-center">
    <div class="container">
      <p>{{ DateYaer }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NuxtFooter',
  computed: {
    DateYaer() {
      return new Date().getFullYear()
    },
  },
}
</script>
