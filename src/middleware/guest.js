export default function ({ store, redirect }) {
  if (!process.server && store.state.auth.loggedIn) {
    return redirect('/');
  }
}
