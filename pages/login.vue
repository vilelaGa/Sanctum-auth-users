<template>
  <div class="container">
    <main class="form-signin w-100 m-auto">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="text-center mt-5">
            <NuxtLogo />

            <h1 class="h3 mb-3 fw-normal">Faça o Login</h1>

            <FormulateForm @submit="Logar" #default="{ isLoading }">
              <div class="form-floating p-2">
                <FormulateInput
                  type="email"
                  name="email"
                  validation="email"
                  placeholder="Email"
                />
              </div>

              <div class="form-floating p-2">
                <FormulateInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
              </div>

              <div class="form-floating p-2">
                <span>
                  <NuxtLink to="/register">Não tem conta? Register </NuxtLink>
                </span>
              </div>

              <div class="form-floating p-2">
                <!-- <button @click="Logar()" class="w-100 btn btn-lg btn-primary">
                Logar
              </button> -->
                <FormulateInput
                  type="submit"
                  :disabled="isLoading"
                  :label="isLoading ? 'Loading...' : 'Submit this form'"
                />
              </div>
            </FormulateForm>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'padrao',

  methods: {
    async Logar(data) {
      try {
        const rs = await this.$axios.post('auth/login', data)

        const token = rs.data.data.token

        this.$cookies.set('token', token)

        this.$toast.success('Autenticado com sucesso')

        this.$router.push('/dash')
      } catch (error) {
        this.$toast.error('Erro ao autenticar')
      }
    },
  },
}
</script>

<style></style>
