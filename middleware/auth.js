export default function({ store }) {
  console.log('----AUTH MIDDLEWARE START----')
  console.dir(store.state.authUser)
  console.log('----AUTH MIDDLEWARE END----')
}
