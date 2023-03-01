<template>
  <div class="container">
    <main class="form-signin w-100 m-auto">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="text-center mt-5">
            <NuxtLogo />

            <h1 class="h3 mb-3 fw-normal">Faça seu registro</h1>

            <div class="form-floating p-2">
              <input
                type="text"
                v-model="register.name"
                class="form-control"
                placeholder="Nome"
              />
            </div>

            <div class="form-floating p-2">
              <input
                type="email"
                v-model="register.email"
                class="form-control"
                placeholder="Email"
              />
            </div>

            <div class="form-floating p-2">
              <input
                type="password"
                v-model="register.password"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <div class="form-floating p-2">
              <span>
                <NuxtLink to="/login">Já tem uma conta? Login </NuxtLink>
              </span>
            </div>

            <div class="form-floating p-2">
              <button @click="Register()" class="w-100 btn btn-lg btn-primary">
                Criar
              </button>
            </div>
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
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async Register() {
      try {
        await this.$axios.post('auth/register', this.register)

        this.$toast.success('Usuario criado com sucesso')

        this.$router.push('/login')

        this.$toast('Agora logue em sua conta')
      } catch (error) {
        this.$toast.error('Erro ao criar um novo usuario')
      }
    },
  },
}
</script>

<style></style>
