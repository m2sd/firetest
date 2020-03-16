export default function({ store, redirect }) {
  console.log('----AUTH MIDDLEWARE START----')
  console.dir(store.authUser)
  console.log('----AUTH MIDDLEWARE END----')
}
