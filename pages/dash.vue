<template>
  <div>
    <div class="px-4 py-5 my-5 text-center">
      <NuxtLogo />
      <h1 class="display-5 fw-bold">Você está logado: {{ token }}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <span type="button" class="btn btn-outline-secondary btn-lg px-4">
            <NuxtLink to="#"> Perfil </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'padrao',

  methods: {
    async User() {
      // const token = Cookie.get('token')
      // await this.$axios.get('auth/user', token)
    },
  },

  middleware: 'auth',
}
</script>
