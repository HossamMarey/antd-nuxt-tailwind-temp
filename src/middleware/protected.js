export default function (ctx) {
  const { store, redirect } = ctx;
  // const TOKEN = ctx.$auth.strategies.laravelJWT.token.get() || null;
  // console.log('protected', TOKEN);

  if (process.server && store && !store.state.auth.loggedIn) {
    return redirect('/login');
  }

  if (!process.server && !store.state.auth.loggedIn) {
    return redirect('/login');
  }
}
