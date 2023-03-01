// import Cookie from 'js-cookie'
// import { Cookie } from 'cookie-universal-nuxt'

export default ({ app, redirect }) => {
  const cookie = app.$cookies.get('token')

  if (!cookie) {
    redirect('/login')
  }
}
